import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PlansPage() {
  const [plans, setPlans] = useState({});

  useEffect(() => {
    async function fetchPlans() {
      const response = await fetch("/api/stripe/products");
      const data = await response.json();
      setPlans(data);
    }
    fetchPlans();
  }, []);

  async function handleClick(planId) {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: planId, quantity: 1 }],
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
    if (error) {
      console.error(error);
    }
  }

  return (
    <Layout mainClassName="">
      <h1 className="text-4xl font-bold mb-10">Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {plans?.prices
          ?.filter(({ type }) => type == "recurring")
          .map((price) => (
            <div
              key={price.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
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
                }).format(price.unit_amount / 100)}{" "}
                / {price.recurring?.interval}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleClick(price.id)}
              >
                Subscribe
              </button>
            </div>
          ))}
      </div>
      <h1 className="text-4xl font-bold mb-10">One Time Purchases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans?.prices
          ?.filter(({ type }) => type !== "recurring")
          .map((price) => (
            <div
              key={price.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
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
                }).format(price.unit_amount / 100)}{" "}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleClick(price.id)}
              >
                Buy
              </button>
            </div>
          ))}
      </div>
    </Layout>
  );
}
