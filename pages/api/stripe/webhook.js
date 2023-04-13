import getRawBody from "raw-body";
import prisma from "lib/prisma";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const STRIPE_SIGNATURE_HEADER = "stripe-signature";

// NB: we disable body parser to receive the raw body string. The raw body
// is fundamental to verify that the request is genuine
export const config = {
  api: {
    bodyParser: false,
  },
};

export const StripeWebhooks = {
  AsyncPaymentSuccess: "checkout.session.async_payment_succeeded",
  Completed: "checkout.session.completed",
  PaymentFailed: "checkout.session.async_payment_failed",
  SubscriptionDeleted: "customer.subscription.deleted",
  SubscriptionUpdated: "customer.subscription.updated",
};

export default async function checkoutsWebhooksHandler(req, res) {
  const signature = req.headers[STRIPE_SIGNATURE_HEADER];
  const rawBody = req.rawBody || (await getRawBody(req));

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOKS_SECRET
    );
    console.log("stripe.webhooks event", event);
  } catch (error) {
    console.log("stripe.webhooks error", error.message);
    return res.status(500).json({
      error: error.message,
      signature,
      rawBody,
    });
  }

  // NB: if stripe.webhooks.constructEvent fails, it would throw an error

  // here we handle each event based on {event.type}

  try {
    switch (event.type) {
      case StripeWebhooks.AsyncPaymentSuccess:
      case StripeWebhooks.Completed: {
        const session = event.data.object;
        const customerId = session.customer;
        const subscriptionId = session.subscription;
        const userId = session.client_reference_id;
        const { mode } = session;

        if (mode === "subscription") {
          const subscription = await stripe.subscriptions.retrieve(
            subscriptionId
          );

          await prisma.user.update({
            where: { id: userId },
            data: {
              customerId,
              subscriptionId: subscription.id,
              quota: {
                increment: 100,
              },
            },
          });
        }
        if (mode === "payment") {
          // get quota from metadata
          const quota = Number(session.metadata?.quota) || 0;
          await prisma.user.update({
            where: { id: userId },
            data: {
              customerId,
              quota: {
                increment: quota,
              },
            },
          });
        }

        break;
      }

      case StripeWebhooks.SubscriptionDeleted: {
        const subscription = event.data.object;
        // remove subscriptionId on user with subscriptionId === subscription.id
        await prisma.user.updateMany({
          where: { subscriptionId: subscription.id },
          data: { subscriptionId: null },
        });
        // log subscription deletion
        console.log("Subscription deleted", subscription.id);
        break;
      }

      case StripeWebhooks.SubscriptionUpdated: {
        const subscription = event.data.object;
        if (subscription.status === "active") {
          // set subscriptionId on user with customerId
          await prisma.user.updateMany({
            where: { customerId: subscription.customer },
            data: { subscriptionId: subscription.id },
          });
          // log subscription update
          console.log("Stripe subscription updated", subscription.id);
        }
        break;
      }

      case StripeWebhooks.PaymentFailed: {
        const session = event.data.object;
        // onPaymentFailed(session);
        console.log("Stripe payment failed", session.id);
        break;
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
