import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const CHECKOUT_SESSION_API_ENDPOINT = "/api/stripe/checkout";

export default function BillingPage() {
  const [plans, setPlans] = useState({});
  const router = useRouter();
  const { status } = router.query;

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
  }, [status]);

  return (
    <Layout mainClassName="">
      <h1 className="text-4xl font-bold mb-10">Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {plans?.prices
          ?.filter(({ type }) => type == "recurring")
          .map((price) => (
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
                }).format(price.unit_amount / 100)}{" "}
                / {price.recurring?.interval}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          ))}
      </div>
      <h1 className="text-4xl font-bold mb-10">One Time Purchases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans?.prices
          ?.filter(({ type }) => type !== "recurring")
          .map((price) => (
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
                }).format(price.unit_amount / 100)}{" "}
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy
              </button>
            </form>
          ))}
      </div>
    </Layout>
  );
}
