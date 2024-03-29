import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
//import Image from "next/image";
import Layout from "../components/Layout";
import { toast } from "react-hot-toast";
//import styles from "../styles/Home.module.css";
import { search } from "../lib/search";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { signinErrors } from "../lib/signinErrors";

export default function Home() {
  const router = useRouter();
  const [searchUrl, setSearchUrl] = useState(router.query.q || "");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const { error: signinError } = router.query;
  // display messsage on signin error
  useEffect(() => {
    if (signinError) {
      const errorKey = String(signinError).toLowerCase();
      let message = signinErrors[errorKey] || `Unknown error: ${errorKey}`;
      const prefix = "Unable to sign in!";
      if (errorKey !== "default") {
        message = `${prefix}\n${message}`;
      }
      toast.error(message);
    }
  }, [signinError]);

  const fetchData = async (searchUrl) => {
    toast.dismiss();
    try {
      setError(null);
      setIsSearching(true);
      const result = await search(searchUrl);
      setResult({ success: true, ...result, searchUrl });
      router.push(`/?q=${encodeURIComponent(searchUrl)}`);
    } catch (error) {
      const message =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.message) ||
        "Something went wrong!";
      toast.error(message);
      setError({ success: false, message });
    }
    setIsSearching(false);
  };

  useEffect(() => {
    if (!searchUrl) {
      setIsSearching(false);
      setResult(null);
      setError(null);
      toast.dismiss();
      return;
    }
    fetchData(searchUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUrl]);

  useEffect(() => {
    const { query } = router;
    setSearchUrl(query.q || "");
  }, [router]);

  const handleSubmit = (url) => {
    if (searchUrl === url) {
      fetchData(url);
    }
    setSearchUrl(url);
  };

  const images = result && Array.isArray(result.images) ? result.images : [];

  const isResultsPage = !!searchUrl && !!result;

  return (
    <Layout mainClassName="flex align-items-center" isHome={!isResultsPage}>
      {!isResultsPage ? (
        <SearchForm
          searchUrl={searchUrl}
          isSearching={isSearching}
          onSubmit={handleSubmit}
          className="w-full md:max-w-xl"
          error={error?.message}
        />
      ) : (
        <div className="relative flex-1 flex items-center px-3 py-6">
          <SearchResults
            images={images}
            searchUrl={result?.searchUrl}
          ></SearchResults>
        </div>
      )}
    </Layout>
  );
}
