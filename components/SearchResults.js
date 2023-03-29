import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Popover, Transition } from "@headlessui/react";
import { track } from "../lib/track";
import { LayoutContext } from "./Layout";
import UpscaleForm from "./UpscaleForm";

/* global Promise */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SearchResults = ({ searchUrl, images, limit = 6 }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === "loading";
  const canDownload = user && !isLoadingUser && user.availableQuota > 0;
  const [tracked, setTracked] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [isUpscaling, setIsUpscaling] = useState(false);

  const { openModal } = useContext(LayoutContext);
  const handleDownload = async (evt) => {
    // const event = new Event("visibilitychange");
    // document.dispatchEvent(event);
    toast.dismiss();

    if (!canDownload) {
      evt.preventDefault();
      if (!user) return openModal();
      return toast.error("You have reached your quota limit.");
    }
    if (tracked) return;
    try {
      await track();
      setTracked(true);
    } catch (error) {
      const message =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.message) ||
        "Something went wrong!";
      toast.error(message);
    } finally {
      // reload session
      const event = new Event("visibilitychange");
      document.dispatchEvent(event);
    }
  };

  // reset tracked state when searchUrl changes
  useEffect(() => {
    setTracked(false);
  }, [searchUrl]);

  const handleUpscale = async ({ url, scale }) => {
    setIsUpscaling(true);
    try {
      const response = await axios.post("/api/predictions", {
        url,
        scale,
      });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      let prediction = response.data;
      setPrediction(prediction);
      // tell user that upscale takes time
      toast.success("Upscaling image. It may take a while...");
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
      if (prediction?.prediction.status == "failed") {
        throw new Error(prediction?.prediction.error);
      } else {
        toast.success("Upscaling completed!");
        if (!tracked) {
          await track();
          setTracked(true);
        }
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsUpscaling(false);
    }
  };

  const upscaledImageUrl = `/api/predictions/images/${prediction?.prediction?.id}`;

  return (
    <div className="w-full md:max-w-2xl lg:max-w-screen-lg mx-auto">
      <div className="text-lg font-medium mb-6">Preview</div>
      <div className="relative w-full aspect-video mb-6">
        <Image
          src={searchUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Image"
          priority
          unoptimized
        />
      </div>
      <div className="mb-11">
        <UpscaleForm
          isUpscaling={isUpscaling}
          onSubmit={handleUpscale}
          url={searchUrl}
        />

        {prediction?.prediction?.status == "succeeded" && (
          <div className="flex flex-col items-center mt-3">
            <a
              href={upscaledImageUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2 flex flex-col items-center"
            >
              <span className="text-center text-custom-blue hover:text-custom-hoverblue">
                Click here to download the enlarged image
              </span>
            </a>
            <Image
              src={upscaledImageUrl}
              alt="output"
              width={976}
              height={400}
              unoptimized
            />
          </div>
        )}
      </div>

      <div className="text-lg font-medium mb-4">Download Links:</div>
      <div>
        <Popover.Group className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 text-lg">
          {images.slice(0, limit).map((image, index) => (
            <Popover key={index} className="relative inline-flex">
              {({ open }) => (
                <>
                  <Popover.Button className="w-full px-7 py-4 bg-custom-darkgray hover:bg-gray-700 transition-colors text-white text-center rounded-[5px] inline-flex items-center justify-center">
                    <span>
                      {image.width}x{image.height}
                    </span>
                  </Popover.Button>
                  <Transition
                    show={open}
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute md:left-1/2 bottom-full mb-3 z-10 w-full md:w-screen md:max-w-xs md:-translate-x-1/2 transform">
                      <div className="overflow-hidden rounded-lg shadow-xl ring- ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-4">
                          <a
                            className="px-5 py-2.5 text-center bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] transition-colors"
                            onClick={(evt) => handleDownload(evt)}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={canDownload ? image.link : "!#"}
                          >
                            <span>Download</span>
                          </a>
                          {/* Do not suggest upscale if both widht ang height of image is more than 1500 */}
                          {(image.width < 1500 || image.height < 1500) && (
                            <UpscaleForm
                              isUpscaling={isUpscaling}
                              onSubmit={handleUpscale}
                              url={image.link}
                              isCompact={true}
                            />
                          )}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}
        </Popover.Group>
      </div>
    </div>
  );
};

export default SearchResults;
