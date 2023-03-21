import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "lib/prisma";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    // Get the user's stripeId from the database
    const session = await getServerSession(req, res, authOptions);
    const user =
      session &&
      (await prisma.user.findUnique({
        where: { email: session.user.email },
      }));
    // get user subscription
    const subscription =
      user &&
      user.subscriptionId &&
      (await stripe.subscriptions.retrieve(user.subscriptionId));

    const prices = await stripe.prices.list({ active: true });
    const products = await stripe.products.list({ active: true });
    res.status(200).json({
      prices: prices.data.map((price) => ({
        ...price,
        product: products.data.find((product) => product.id === price.product),
      })),
      products: products.data,
      subscription,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
