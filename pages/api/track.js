import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "lib/prisma";
import _ from "lodash";
import { pushUserDataToMailchimp } from "lib/mailchimp";
import { decrypt, initEncryption } from "../../lib/encryption";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  // only POST requests
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }
  const { images } = req.body;
  if (!images) {
    res
      .status(400)
      .json({ success: false, message: "Missing `images` parameter" });
  }
  try {
    // decrypt images links
    await initEncryption();
    const hashes = {};
    for (let i = 0; i < images.length; i++) {
      hashes[images[i].hash] = await decrypt(images[i].hash);
    }
    // update user quota
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
      success: true,
      data: _.pick(user, ["usedQuota", "quota"]),
      images,
      hashes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
