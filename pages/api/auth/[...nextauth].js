import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { mailchimpTx, mailchimp } from "@/lib/mailchimp";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import { readFileSync } from "fs";
import path from "path";
import _ from "lodash";
import requestIp from "request-ip";
import md5 from "md5";
import { pushUserDataToMailchimp } from "@/lib/mailchimp";
import IPinfoWrapper from "node-ipinfo";
const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN);

// Email sender
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true,
});

const emailsDir = path.resolve(process.cwd(), "emails");

const sendVerificationRequest = async ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, "confirm-email.html"), {
    encoding: "utf8",
  });
  const emailTemplate = Handlebars.compile(emailFile);
  const html = emailTemplate({
    base_url: process.env.NEXTAUTH_URL,
    signin_url: url,
    email: identifier,
  });
  // my own smtp server
  /* transporter.sendMail({
    from: `"✨ HiReso" ${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: "HiReso Login Verification",
    html,
  }); */

  // mailchimp transactional
  const response = await mailchimpTx.messages.send({
    message: {
      from_email: process.env.MAILCHIMP_FROM_EMAIL,
      subject: "HiReso Login Verification",
      html,
      to: [{ email: identifier, type: "to" }],
    },
  });
  console.log(response);
  if (!["queued", "sent"].includes(_.get(response, "[0]status"))) {
    throw new Error(response.message || "Failed to send verification email");
  }
};

export const authOptions = {
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
  },
  providers: [
    EmailProvider({
      maxAge: 10 * 60,
      sendVerificationRequest,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  events: {},
  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.usedQuota = user.usedQuota;
      session.user.quota = user.quota;
      session.user.availableQuota =
        Math.max(user.quota - user.usedQuota, 0) || 0;
      // gravatar user image
      if (!user.image) {
        session.user.image = `https://www.gravatar.com/avatar/${md5(
          user.email
        )}?s=96`;
      }
      return session;
    },
  },
};

export default async function auth(req, res) {
  console.log(req.auth);
  return await NextAuth(req, res, {
    ...authOptions,
    callbacks: {
      ...authOptions.callbacks,
    },
    events: {
      ...authOptions.events,
      createUser: async ({ user }) => {
        let clientIp, country;
        // get user country
        try {
          console.log(`Saving user country`);
          clientIp = requestIp.getClientIp(req);
          console.log(`Client IP: ${clientIp}`);
          const ipInfo = await ipinfoWrapper.lookupIp(clientIp);
          console.log(ipInfo);
          country = ipInfo.country || "UA";
          // save country code
          if (country) {
            await prisma.user.update({
              where: { id: user.id },
              data: { country },
            });
            user.country = country;
          }
        } catch (error) {
          console.log(`Unable to get user country. Error: ${error.message}`);
        }

        const { email, name } = user;
        console.log("New user:", user);
        // send welcome email
        try {
          const emailFile = readFileSync(path.join(emailsDir, "welcome.html"), {
            encoding: "utf8",
          });
          const emailTemplate = Handlebars.compile(emailFile);
          await transporter.sendMail({
            from: `"✨ HiReso" ${process.env.EMAIL_FROM}`,
            to: email,
            subject: "Welcome to HiReso! 🎉",
            html: emailTemplate({
              base_url: process.env.NEXTAUTH_URL,
              support_email: "info@hireso.io",
            }),
          });
          console.log(
            `Successfully sent welcome email to ${email}. New user id: ${user.id}`
          );
        } catch (error) {
          console.log(`❌ Unable to send welcome email to user (${email})`);
        }

        // add to mailchimp list

        try {
          await pushUserDataToMailchimp(user);
        } catch (error) {
          // do something if subsription was unsuccessful
          console.log(
            `Failed to add email ${email} to the mailchimp. Error message:`,
            error?.message
          );
        }
      },
    },
  });
}
