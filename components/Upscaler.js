import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";

/* global Promise */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home({ searchUrl }) {
  const [prediction, setPrediction] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scale, setScale] = useState(2);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsProcessing(true);
    try {
      const response = await axios.post("/api/predictions", {
        url: searchUrl,
        scale,
      });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      let prediction = response.data;
      setPrediction(prediction);
      // tell user that upscale takes time
      toast.success("Upscaling image, please wait...");
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
    <div className="mb-11">
      <form
        className="flex flex-col sm:flex-row items-center"
        onSubmit={handleSubmit}
      >
        {/* message to upscale */}
        <span className="text-lg font-medium mb-3 sm:mb-0">Enlarge Image:</span>
        {/* <select> control with scale option from 2 to 8 */}
        <select
          className="mb-3 sm:mb-0 sm:ml-2.5 pl-3.5 pr-16 py-2.5 border border-custom-border text-custom-inputtext placeholder:text-custom-placeholder bg-custom-inputbg  outline-none disabled:opacity-75 disabled:pointer-events-none rounded-[5px]"
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
        >
          {/* iterate from 2 to 8 */}
          {Array.from({ length: 7 }, (_, i) => i + 2).map((i) => (
            <option key={i} value={i}>
              {i}x
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isProcessing}
          className="mb-3 sm:mb-0 sm:ml-2.5 px-5 py-2.5 bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] transition-colors"
        >
          {isProcessing ? "Processing..." : "Enlarge Image"}
        </button>
      </form>
      {prediction?.prediction?.status == "succeeded" && (
        <div className="flex flex-col items-center mt-4">
          <a
            href={prediction?.prediction?.output}
            target="_blank"
            rel="noreferrer"
            className="py-2 flex flex-col items-center"
          >
            <span className="text-center text-custom-blue hover:text-custom-hoverblue">
              Click here to download the enlarged image
            </span>
          </a>
          <Image
            src={prediction?.prediction?.output}
            alt="output"
            width={976}
            height={400}
          />
        </div>
      )}
    </div>
  );
}
