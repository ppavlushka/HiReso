import path from "path";
import Handlebars from "handlebars";
import { readFileSync } from "fs";
import _ from "lodash";
import { mailchimpTx } from "@/lib/mailchimp";

const emailsDir = path.resolve(process.cwd(), "emails");

export const sendVerificationRequest = async ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, "confirm-email.html"), {
    encoding: "utf8",
  });
  const emailTemplate = Handlebars.compile(emailFile);
  const html = emailTemplate({
    base_url: process.env.NEXTAUTH_URL,
    signin_url: url,
    email: identifier,
  });

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

export const sendWelcomeEmail = async (user) => {
  const { email } = user;
  const emailFile = readFileSync(path.join(emailsDir, "welcome.html"), {
    encoding: "utf8",
  });
  const emailTemplate = Handlebars.compile(emailFile);
  const html = emailTemplate({
    base_url: process.env.NEXTAUTH_URL,
    support_email: "info@hireso.io",
  });

  // mailchimp transactional
  const response = await mailchimpTx.messages.send({
    message: {
      from_email: process.env.MAILCHIMP_FROM_EMAIL,
      subject: "Welcome to HiReso! 🎉",
      html,
      to: [{ email, type: "to" }],
    },
  });
  if (!["queued", "sent"].includes(_.get(response, "[0]status"))) {
    throw new Error(response.message || "Failed to send verification email");
  }
  console.log(
    `Successfully sent welcome email to ${email}. New user id: ${user.id}`
  );
};
