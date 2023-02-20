import React, { useState } from "react";
import Image from "next/image";
//import styles from "../styles/Home.module.css";
import { search } from "../lib/dummy-api";
import CustomHead from "../components/CustomHead";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [searchUrl, setSearchUrl] = useState(
    "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg"
  );
  const [isSearching, setIsSearching] = useState(false);
  //const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const fetchData = async (searchUrl) => {
    toast.dismiss();
    try {
      setIsSearching(true);
      const result = await search(searchUrl);
      setResult(result);
    } catch (error) {
      const message =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.message) ||
        "Something went wrong!";
      toast.error(message);
      //setError(error);
    }
    setIsSearching(false);
    setSelectedIndex(null);
  };

  const handleSubmit = (url) => {
    setSearchUrl(url);
    fetchData(url);
  };

  const links =
    result && Array.isArray(result.image_results)
      ? result.image_results.map(({ original_image }) => original_image)
      : [];
  const selectedImage = links[selectedIndex];
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={!!result ? "flex flex-col min-h-screen" : ""}>
      <CustomHead />
      <div
        className={
          "flex justify-center items-center px-3 " +
          (result ? "py-5 bg-custom-lightgray" : "h-screen")
        }
      >
        <SearchForm
          searchUrl={searchUrl}
          isSearching={isSearching}
          onSubmit={handleSubmit}
        />
      </div>
      {!!result && (
        <div className="relative flex-1 flex items-center  bg-custom-dark text-white px-3 py-6">
          {selectedImage ? (
            <Image
              src={selectedImage.link}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="Image"
              priority
            />
          ) : (
            <SearchResults
              links={links}
              imageUrl={searchUrl}
              onSelect={handleSelect}
            />
          )}
        </div>
      )}
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}
