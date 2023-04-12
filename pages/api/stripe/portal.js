import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "lib/prisma";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function billingPortalRedirectHandler(req, res) {
  // Get the user's stripeId from the database
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    res.status(401).json({ success: false, message: "User is not exists." });
    return;
  }
  const customerId = user.customerId;
  // NB: you may want to check that
  // the user is authorized to access the portal
  if (!customerId) {
    return res.status(401).end();
  }

  try {
    const returnUrl =
      req.headers.referer || req.headers.origin || process.env.NEXTAUTH_URL;
    // remove optional query params from the return url
    const returnUrlWithoutQueryParams = returnUrl.split("?")[0];

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrlWithoutQueryParams,
    });
    console.log("Stripe portal session created.", portalSession);
    res.redirect(301, portalSession.url);
  } catch (e) {
    console.error(e, `Stripe Billing Portal redirect error`);

    // Here, consider redirecting the user to an error page
    return res.end(500);
  }
}
