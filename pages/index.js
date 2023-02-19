import Image from "next/image";
import styles from "../styles/Home.module.css";
import { search } from "../lib/dummy-api";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [searchUrl, setSearchUrl] = useState(
    "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg"
  );
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const fetchData = async (searchUrl) => {
    try {
      setIsSearching(true);
      const result = await search(searchUrl);
      setResult(result);
    } catch (error) {
      setError(error);
    }
    setIsSearching(false);
  };

  const handleSubmit = (url) => {
    setSearchUrl(url);
    fetchData(url);
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
        <div className="flex-1 bg-custom-dark text-white px-3 py-6">
          <SearchResults result={result} imageUrl={searchUrl} />
        </div>
      )}
    </div>
  );
}
