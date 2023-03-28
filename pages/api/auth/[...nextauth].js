import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "lib/prisma";
import md5 from "md5";
import { pushUserDataToMailchimp } from "lib/mailchimp";
import { verifyRecaptchaV3Token } from "lib/recaptcha";
import { sendVerificationRequest, sendWelcomeEmail } from "lib/emails";
import getUserCountryWithUpdate from "lib/country";

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
      session.user.showBilling = !!user.customerId;
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
      async signIn({ user, isNewUser }) {
        // get user country
        if (!user.country) {
          user.country = await getUserCountryWithUpdate(req, user);
        } else {
          console.log(
            `User ${user.email} country already saved: ${user.country}`
          );
        }
        if (!isNewUser) return true;

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
        return true;
      },
    },
  });
}
