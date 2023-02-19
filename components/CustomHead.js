import React from "react";
import Head from "next/head";

function CustomHead() {
  const siteTitle = "Search for similar images";
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={siteTitle} />
      <meta
        property="og:image"
        content={`https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default CustomHead;
