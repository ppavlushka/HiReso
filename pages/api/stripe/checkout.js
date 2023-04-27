import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "lib/prisma";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createStripeCheckout({ returnUrl, user, price, product }) {
  const clientReferenceId = user.id;
  const customer = user.customerId || undefined;
  const mode = price.type === "recurring" ? "subscription" : "payment";

  const lineItem = {
    quantity: 1,
    price: price.id,
  };

  // NB: trimmed for simplicity but use
  // smarter methods for appending the query parameters
  const successUrl = `${returnUrl}?status=success`;
  const cancelUrl = `${returnUrl}?status=cancel`;

  return stripe.checkout.sessions.create({
    mode,
    customer,
    line_items: [lineItem],
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: clientReferenceId,
    metadata: product.metadata,
    allow_promotion_codes: true,
  });
}

async function CreateStripeSession(req, res) {
  const { priceId, returnUrl } = req.body;

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res
        .status(401)
        .json({ success: false, message: "You must be logged in." });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!user) {
      res.status(401).json({ success: false, message: "User is not exists." });
      return;
    }
    // get stripe price
    const price = await stripe.prices.retrieve(priceId);
    // get product
    const product = await stripe.products.retrieve(price.product);

    const { url } = await createStripeCheckout({
      returnUrl,
      user,
      price,
      product,
    });

    // redirect user back based on the response
    res.redirect(301, url);
  } catch (e) {
    console.error(e, `Stripe Checkout error`);

    // either end request or ideally redirect users to the same URL
    // but using a query parameter such as error=true
    return res.status(500).end();
  }
}

export default CreateStripeSession;
