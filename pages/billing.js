import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const CHECKOUT_SESSION_API_ENDPOINT = "/api/stripe/checkout";

function Plan({ price, buttonLabel = "Subscribe", isActive = false }) {
  const router = useRouter();
  return (
    <form
      key={price.id}
      action={CHECKOUT_SESSION_API_ENDPOINT}
      method="POST"
      className="bg-white rounded-lg shadow-lg p-6 text-center"
    >
      <input
        type="hidden"
        name={"returnUrl"}
        defaultValue={`${window.location.origin}${router.pathname}`}
      />
      <input type="hidden" name={"priceId"} defaultValue={price.id} />

      <h2 className="text-2xl font-bold mb-2">{price.product?.name}</h2>
      <p className="text-gray-600 mb-4">{price.product?.description}</p>
      {/* centered image */}
      <div className="flex justify-center mb-4">
        <Image
          className=""
          src={price.product?.images[0]}
          alt={price.product?.name}
          width={100}
          height={100}
        />
      </div>
      <div className="text-3xl font-bold mb-4">
        {Intl.NumberFormat({
          style: "currency",
          currency: price.currency,
        }).format(price.unit_amount / 100)}
        {price.type === "recurring" && " / " + price.recurring?.interval}
      </div>
      {isActive ? (
        <button
          type="submit"
          className="text-green-500 font-bold py-2 px-4 rounded"
        >
          Subscribed
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonLabel}
        </button>
      )}
    </form>
  );
}

function SubscriptionStatus({ subscription }) {
  if (subscription.status !== "active") {
    return (
      <>
        <p>Your subscription is not active</p>
        <p>Use the button below to activate your subscription.</p>
      </>
    );
  }
  if (subscription.cancel_at_period_end) {
    return (
      <>
        <p>
          Your subscription has been cancelled. It becames inactive since{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
        <p>Use the button below to reactivate your subscription.</p>
      </>
    );
  }
  // subscription is active
  return (
    <>
      <p>
        Your subscription is active and will be renewed on{" "}
        {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
      </p>
      <p>Use the button below to cancel your subscription.</p>
    </>
  );
}

export default function BillingPage() {
  const [plans, setPlans] = useState(null);
  const router = useRouter();
  const { status } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPlans() {
      const response = await axios.get("/api/stripe/products");
      setPlans(response.data);
    }
    fetchPlans();
  }, []);

  // Display toast message dependint on status
  useEffect(() => {
    if (status && status === "success") {
      toast.success("Payment Successful");
    }
    if (status && status === "cancel") {
      // display toast warning
      toast.error("Payment cancelled");
    }
    if (status) {
      // reset status
      router.replace("/billing");
    }
  }, [status]);

  return (
    <Layout mainClassName="">
      <h1 className="text-4xl font-bold mb-5">Your subscription</h1>
      <div className="mb-24">
        {plans &&
          (plans?.subscription ? (
            <div>
              {/* display subscription end date */}
              <div className="mb-4">
                <SubscriptionStatus subscription={plans.subscription} />
              </div>
            </div>
          ) : (
            <div>You are on free plan</div>
          ))}
        {session?.user?.showBilling && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <form action="/api/stripe/portal" method="POST">
            <button
              type="submit"
              className=" px-5 py-3 rounded-[5px] bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white transition-colors"
            >
              Manage Billing
            </button>
          </form>
        )}
      </div>
      <h1 className="text-4xl font-bold mb-10">Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {plans?.prices
          ?.filter(({ type }) => type == "recurring")
          .map((price) => (
            <Plan
              key={price.id}
              price={price}
              buttonLabel="Subscribe"
              isActive={plans.subscription?.plan?.id === price.id}
            />
          ))}
      </div>
      <h1 className="text-4xl font-bold mb-10">One Time Purchases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans?.prices
          ?.filter(({ type }) => type !== "recurring")
          .map((price) => (
            <Plan key={price.id} price={price} buttonLabel="Buy" />
          ))}
      </div>
    </Layout>
  );
}
