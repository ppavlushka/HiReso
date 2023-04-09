import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import classnames from "classnames";

const CHECKOUT_SESSION_API_ENDPOINT = "/api/stripe/checkout";

function Plan({
  price,
  buttonLabel = "Subscribe",
  isActive = false,
  className = "",
  isPopular = false,
}) {
  const router = useRouter();
  const isRecurring = price.type === "recurring";
  const buttonClassNames = classnames(
    "order-2 sm:order-1 w-full sm:w-auto text-white bg-blue-500 hover:bg-blue-700 text-lg min-w-[150px] py-2.5 px-5 rounded-[10px]",
    {
      "bg-custom-green": isActive,
      "mr-5": isRecurring,
    }
  );
  const description = price.product?.description;
  const priceJSX = (
    <>
      <span className="font-extrabold text-2xl">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: price.currency,
        }).format(price.unit_amount / 100)}
      </span>
      <span className="font-semibold text-sm">
        {isRecurring && " / " + price.recurring?.interval}
      </span>
    </>
  );
  return (
    <form
      key={price.id}
      action={CHECKOUT_SESSION_API_ENDPOINT}
      method="POST"
      className={classnames(
        "mb-2.5 bg-[#F2F8FF] text-black border border-[#CECECE] rounded-[20px] py-7 px-8",
        className
      )}
    >
      <input
        type="hidden"
        name={"returnUrl"}
        defaultValue={`${window.location.origin}${router.pathname}`}
      />
      <input type="hidden" name={"priceId"} defaultValue={price.id} />
      <div
        className={classnames(
          "flex flex-col sm:flex-row items-center flex-wrap",
          {
            "mb-5": isRecurring,
          }
        )}
      >
        <div className="w-[80px] sm:mr-5 mb-1 sm:mb-0 order-2">
          <Image
            className="rounded-[5px] inline-block "
            src={price.product?.images[0]}
            alt={price.product?.name}
            width={80}
            height={80}
          />
        </div>
        <div className="sm:grow order-2 text-center sm:text-left">
          <h2 className="text-2xl font-medium mb-1">{price.product?.name}</h2>
          {isRecurring ? (
            <span className="text-custom-blue border border-custom-blue border-dashed py-1 px-2.5 rounded-[10px] text-sm">
              +{price.product?.metadata?.quota} downloads /{" "}
              {price.recurring?.interval}
            </span>
          ) : (
            <>
              <p className="mb-1">{description}</p>
              <div class="mb-5 sm-mb-0">{priceJSX}</div>
            </>
          )}
        </div>
        <div
          className={classnames("sm:ml-auto", {
            "sm:self-start mb-5 sm:mb-0 order-1 sm:order-3": isRecurring,
            "self-stretch sm:self-center order-3": !isRecurring,
          })}
        >
          {isRecurring && isPopular && (
            <div className="bg-custom-green text-white text-[13px] font-bold px-4 py-1.5 rounded-[10px] sm:rounded-r-none sm:relative sm:-right-8">
              Most Popular
            </div>
          )}
          {!isRecurring && (
            <button type="submit" className={buttonClassNames}>
              {buttonLabel}
            </button>
          )}
        </div>
      </div>

      {isRecurring && (
        <>
          <p className="mb-3.5">{description}</p>
          <div className="flex flex-col sm:flex-row items-center">
            {isActive ? (
              <button type="submit" className={buttonClassNames}>
                Subscribed
              </button>
            ) : (
              <button type="submit" className={buttonClassNames}>
                {buttonLabel}
              </button>
            )}
            <div className="text-black order-1 sm:order-2 mb-4 sm:mb-0">
              {priceJSX}
            </div>
          </div>
        </>
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { status } = router.query;
  const { data: session } = useSession();

  async function fetchPlans() {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get("/api/stripe/products");
      setPlans(response.data);
    } catch (error) {
      toast.error("Error fetching plans");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
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

  const headerClassNames = "text-2xl font-medium mb-5 sm:ml-8";

  return (
    <Layout mainClassName="">
      <div className="max-w-2xl mx-auto">
        {session && (
          <>
            <h1 className={headerClassNames}>Your subscription</h1>
            <div className="mb-12 bg-[#F2F8FF] text-black border border-[#CECECE] rounded-[20px] py-7 px-8">
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
                    className="text-white bg-blue-500 hover:bg-blue-700 text-lg min-w-[150px] py-2.5 px-5 rounded-[10px]"
                  >
                    Manage Billing
                  </button>
                </form>
              )}
            </div>
          </>
        )}
        {loading ? (
          <div className="text-center text-xl">Loading plans and prices...</div>
        ) : (
          <>
            <h1 className={headerClassNames}>Membership Subscription</h1>
            <div className="mb-12">
              {plans?.prices
                ?.filter(({ type }) => type == "recurring")
                .map((price) => (
                  <Plan
                    key={price.id}
                    price={price}
                    buttonLabel="Subscribe"
                    isActive={plans.subscription?.plan?.id === price.id}
                    isPopular={true}
                  />
                ))}
            </div>
            <h1 className={headerClassNames}>One Time Purchases</h1>
            <div className="mb-12">
              {plans?.prices
                ?.filter(({ type }) => type !== "recurring")
                .map((price) => (
                  <Plan key={price.id} price={price} buttonLabel="Buy" />
                ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
