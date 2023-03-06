export const mailchimpTx = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_TRANSACTIONAL_API_KEY
);

export const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_MARKETING_API_KEY,
  server: process.env.MAILCHIMP_MARKETING_SERVER_PREFIX,
});
