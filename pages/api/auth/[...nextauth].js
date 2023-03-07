import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import requestIp from "request-ip";
import md5 from "md5";
import { pushUserDataToMailchimp } from "@/lib/mailchimp";
import { verifyRecaptchaV3Token } from "@/lib/recaptcha";
import IPinfoWrapper from "node-ipinfo";
const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN);
import { sendVerificationRequest, sendWelcomeEmail } from "@/lib/emails";

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
      async signIn({ user, email }) {
        if (email?.verificationRequest) {
          const { recaptchaToken } = req.body;
          const isRecapchaOk = await verifyRecaptchaV3Token(
            recaptchaToken,
            "login"
          );
          if (!isRecapchaOk) {
            console.log("Recaptcha check failed for user:", user);
          }
          return isRecapchaOk;
        }
        return true;
      },
    },
    events: {
      ...authOptions.events,
      createUser: async ({ user }) => {
        let clientIp, countryCode;
        // get user country
        try {
          console.log(`Saving user country`);
          clientIp = requestIp.getClientIp(req);
          clientIp =
            process.env.NODE_ENV === "production"
              ? requestIp.getClientIp(req)
              : "213.179.246.240";
          console.log(`Client IP: ${clientIp}`);
          const ipInfo = await ipinfoWrapper.lookupIp(clientIp);
          console.log(ipInfo);
          countryCode = ipInfo.countryCode || ipInfo.country;
          // save country code
          if (countryCode) {
            console.log(
              `Saving country code: ${countryCode} for user: ${user.email}`
            );
            console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
            await prisma.user.update({
              where: { email: user.email },
              data: { country: countryCode },
            });
            user.country = countryCode;
          }
        } catch (error) {
          console.log(`Unable to get user country. Error: ${error.message}`);
        }

        const { email } = user;
        console.log("New user:", user);
        // send welcome email
        try {
          await sendWelcomeEmail(user);
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
