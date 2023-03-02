import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";
import { toast } from "react-hot-toast";
//import styles from "../styles/Home.module.css";
import { search } from "../lib/search";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Logo from "../components/Logo";

export default function Home() {
  const router = useRouter();
  const [searchUrl, setSearchUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);

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
  };

  useEffect(() => {
    if (!searchUrl) {
      setIsSearching(false);
      setResult(null);
      return;
    }
    fetchData(searchUrl);
  }, [searchUrl]);

  useEffect(() => {
    const { query } = router;
    setSearchUrl(query.q || "");
  }, [router]);

  const handleSubmit = (url) => {
    setSearchUrl(url);
    router.push(`/?q=${encodeURIComponent(url)}`);
  };

  const links = result && Array.isArray(result.images) ? result.images : [];
  const handleSelect = () => {
    // ToDo: Implement
  };

  const isResultsPage = !!searchUrl && !!result;

  return (
    <Layout mainClassName="flex align-items-center" isHome={!isResultsPage}>
      {!isResultsPage ? (
        <div
          className={"w-full flex flex-col justify-center items-center py-5 "}
        >
          <Logo className="mb-16" />
          <SearchForm
            searchUrl={searchUrl}
            isSearching={isSearching}
            onSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div className="relative flex-1 flex items-center  bg-custom-dark text-white px-3 py-6">
          <SearchResults
            links={links}
            imageUrl={searchUrl}
            onSelect={handleSelect}
          />
        </div>
      )}
    </Layout>
  );
}
