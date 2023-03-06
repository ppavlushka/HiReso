import md5 from "md5";

export const mailchimpTx = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_TRANSACTIONAL_API_KEY
);

export const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_MARKETING_API_KEY,
  server: process.env.MAILCHIMP_MARKETING_SERVER_PREFIX,
});

export async function pushUserDataToMailchimp(user = {}) {
  // find list id
  let listId = null;
  try {
    const lists = await mailchimp.lists.getAllLists();
    listId = Array.isArray(lists?.lists) ? lists.lists[0].id : null;
  } catch (error) {
    // unable to get list id
  }

  // calculate first and last name
  const { name } = user;
  const [fName, ...lName] = String(name || "").split(" ");
  const firstName = fName || "";
  const lastName = lName.join(" ") || "";
  const userData = {
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      COUNTRY: user.country,
      QUOTA: user.quota,
      USEDQUOTA: user.usedQuota,
      SUB: user.subscription || "Free", // used subscription
    },
  };
  let existingContact = null;
  try {
    // Check if the user already exists in Mailchimp
    existingContact = await mailchimp.lists.getListMember(
      listId,
      md5(user.email.toLowerCase())
    );
  } catch (error) {
    console.log("User does not exist in Mailchimp");
  }
  try {
    if (existingContact) {
      // Update the existing contact with the new user data
      const updatedContact = await mailchimp.lists.updateListMember(
        listId,
        existingContact.id,
        userData
      );

      console.log(
        `Updated existing contact in Mailchimp: ${updatedContact.email_address}`
      );
    } else {
      // Create a new contact with the provided user data
      const newContact = await mailchimp.lists.addListMember(listId, {
        email_address: user.email,
        status: "subscribed",
        ...userData,
      });

      console.log(`Created new contact in Mailchimp: ${newContact.email}`);
    }
  } catch (error) {
    console.error("Error pushing user data to Mailchimp:", error);
  }
}
