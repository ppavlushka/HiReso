import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";

/* global Promise */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home({ searchUrl }) {
  const [prediction, setPrediction] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpscale = async () => {
    setIsProcessing(true);
    try {
      const response = await axios.post("/api/predictions", {
        url: searchUrl,
      });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      let prediction = response.data;
      setPrediction(prediction);
      while (!["succeeded", "failed"].includes(prediction?.prediction.status)) {
        await sleep(5000);
        const response = await axios.get(
          `/api/predictions/${prediction?.prediction.id}`
        );
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        prediction = response.data;
        setPrediction(prediction);
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="pt-16">
      {prediction?.prediction?.status == "succeeded" ? (
        <div className="flex flex-col items-center">
          <a
            href={prediction?.prediction?.output}
            target="_blank"
            rel="noreferrer"
            className="py-2 flex flex-col items-center"
          >
            <span className="text-center text-custom-blue hover:text-custom-hoverblue">
              Click here to download the image
            </span>
          </a>
          <Image
            src={prediction?.prediction?.output}
            alt="output"
            width={976}
            height={400}
          />
        </div>
      ) : (
        <div className="py-4 flex flex-col items-center">
          {/* message to upscale */}
          <span className="text-xl font-bold">
            Do not like search results? Try to upscale your image
          </span>
          <span className="pb-3 text-sm text-gray-500">
            (This may take a while)
          </span>
          <button
            onClick={handleUpscale}
            disabled={isProcessing}
            className="my-4 sm:mt-0 px-7 py-3 bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] transition-colors"
          >
            {isProcessing ? "Processing..." : "Upscale"}
          </button>
        </div>
      )}
    </div>
  );
}
