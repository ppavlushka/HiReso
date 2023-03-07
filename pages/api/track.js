import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import _ from "lodash";
import { pushUserDataToMailchimp } from "@/lib/mailchimp";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  try {
    console.log(session);
    const email = session.user?.email;
    console.log(email);
    await prisma.user.update({
      where: { email },
      data: {
        usedQuota: {
          increment: 1,
        },
      },
    });
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log(user);
    await pushUserDataToMailchimp(user);

    return res.json({
      success: false,
      message: "Success",
      data: _.pick(user, ["usedQuota", "quota"]),
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
}
