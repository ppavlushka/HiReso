import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "lib/prisma";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    // Get the user's stripeId from the database
    const session = await getServerSession(req, res, authOptions);
    // return if no session
    if (!session) {
      return res.status(401).json({
        success: false,
        message: "You must be logged in.",
      });
    }
    const user =
      session &&
      (await prisma.user.findUnique({
        where: { email: session.user.email },
      }));
    // get user subscription
    // eslint-disable-next-line no-undef
    const [subscription, prices] = await Promise.all([
      user &&
        user.subscriptionId &&
        stripe.subscriptions.retrieve(user.subscriptionId),
      stripe.prices.list({ active: true, expand: ["data.product"] }),
    ]);
    res.status(200).json({
      prices: prices.data.filter((price) => price?.product?.active),
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}
