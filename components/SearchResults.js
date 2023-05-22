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

function isBig(image) {
  return image.width * image.height > 1500000;
}

const DownloadButton = ({
  children,
  image,
  canDownload,
  className = "",
  onClick = () => {},
  loading = false,
}) => {
  const inner = loading ? "Loading..." : children;
  if (!image.link)
    return (
      <button className={className} onClick={onClick}>
        {inner}
      </button>
    );
  return (
    <a
      className={className}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      href={canDownload ? image.link : "!#"}
    >
      {inner}
    </a>
  );
};

const SearchResults = ({ searchUrl, images, limit = 6 }) => {
  const { data: session, status } = useSession();
  const [hashes, setHashes] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isUpscaling, setIsUpscaling] = useState(false);
  const user = session?.user;
  const isLoadingUser = status === "loading";
  const canDownload = user && !isLoadingUser && user.availableQuota > 0;

  const { openModal, openLimitModal } = useContext(LayoutContext);

  const trackIfNeeded = async function () {
    if (hashes) {
      setActiveImage(null);
      return;
    }
    try {
      const response = await track(images);
      setHashes(response?.hashes || null);
      return response;
    } catch (error) {
      setActiveImage(null);
      const message =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.message) ||
        "Something went wrong!";
      toast.error(message);
    }
  };

  useEffect(() => {
    if (hashes && activeImage) {
      window.open(hashes[activeImage.hash], "_blank");
      setActiveImage(null);
    }
  }, [hashes, activeImage]);

  const showLimitMessage = () => {
    if (!user) return openModal();
    openLimitModal();
  };

  const handleDownload = async (evt, image) => {
    toast.dismiss();

    if (!canDownload) {
      evt.preventDefault();
      return showLimitMessage();
    }
    if (!hashes) {
      setActiveImage(image);
    }
    await trackIfNeeded();
  };

  // reset hashes state when searchUrl changes
  useEffect(() => {
    setHashes(null);
  }, [searchUrl]);

  const decodedImages = images.map((image) => ({
    ...image,
    link: hashes && hashes[image.hash],
  }));

  const handleUpscale = async ({ image, scale }) => {
    toast.dismiss();
    if (!canDownload) {
      return showLimitMessage();
    }
    try {
      let localHashes = hashes;
      if (!hashes) {
        // decode image urls first
        const response = await track(images);
        setHashes(response?.hashes || null);
        localHashes = response?.hashes;
      }
      setIsUpscaling(true);
      const response = await axios.post("/api/predictions", {
        url: image.link || localHashes[image.hash],
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
        throw new Error("Failed to upscale image.");
      } else {
        toast.success("Upscaling completed!");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsUpscaling(false);
    }
  };

  const upscaledImageUrl = `/api/predictions/images/${prediction?.prediction?.id}`;

  const downloadButtonClass =
    "w-full px-7 py-4 bg-custom-darkgray hover:bg-gray-700 transition-colors text-white text-center rounded-[5px] inline-flex items-center justify-center";
  const popoverButtonClass =
    "px-5 py-2.5 w-full text-center text-white bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none disabled:opacity-75 disabled:pointer-events-none rounded-[5px] transition-colors";
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
          image={{ link: searchUrl }}
          popoverButtonClass={popoverButtonClass}
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
          {decodedImages.slice(0, limit).map((image, index) =>
            isBig(image) ? (
              <DownloadButton
                key={index}
                onClick={(evt) => handleDownload(evt, image)}
                image={image}
                canDownload={canDownload}
                className={downloadButtonClass}
                loading={activeImage?.hash === image.hash}
              >
                <span>
                  {image.width}x{image.height}
                </span>
              </DownloadButton>
            ) : (
              <Popover key={index} className="relative inline-flex">
                {({ open }) => (
                  <>
                    <Popover.Button className={downloadButtonClass}>
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
                            <DownloadButton
                              onClick={(evt) => handleDownload(evt, image)}
                              image={image}
                              canDownload={canDownload}
                              className={popoverButtonClass}
                              loading={activeImage?.hash === image.hash}
                            >
                              <span>Download</span>
                            </DownloadButton>
                            <UpscaleForm
                              isUpscaling={isUpscaling}
                              onSubmit={handleUpscale}
                              image={image}
                              isCompact={true}
                              popoverButtonClass={popoverButtonClass}
                            />
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            )
          )}
        </Popover.Group>
      </div>
    </div>
  );
};

export default SearchResults;
