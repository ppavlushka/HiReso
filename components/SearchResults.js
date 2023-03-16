import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { track } from "../lib/track";
import { LayoutContext } from "./Layout";

const SearchResults = ({ searchUrl, images, limit = 6 }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === "loading";
  const canDownload = user && !isLoadingUser && user.availableQuota > 0;
  const [tracked, setTracked] = useState(false);

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

  return (
    <div className="w-full md:max-w-2xl lg:max-w-screen-lg mx-auto">
      <div className="text-lg font-medium mb-6">Preview</div>
      <div className="relative w-full aspect-video mb-16">
        <Image
          src={searchUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Image"
          priority
          unoptimized
        />
      </div>
      <div className="text-lg font-medium mb-4">Download Links:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 text-lg">
        {images.slice(0, limit).map((image, index) => (
          <a
            key={index}
            className="px-7 py-4 bg-custom-darkgray hover:bg-gray-700 transition-colors text-white text-center rounded-[5px] inline-flex items-center justify-center"
            onClick={(evt) => handleDownload(evt)}
            target="_blank"
            rel="noopener noreferrer"
            href={canDownload ? image.link : "!#"}
          >
            <span>
              {image.width}x{image.height}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
