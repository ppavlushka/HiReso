import stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeApi = stripe(stripeSecretKey);

export default async function handler(req, res) {
  try {
    const prices = await stripeApi.prices.list({ active: true });
    const products = await stripeApi.products.list({ active: true });
    res.status(200).json({
      prices: prices.data.map((price) => ({
        ...price,
        product: products.data.find((product) => product.id === price.product),
      })),
      products: products.data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
