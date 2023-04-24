import React from "react";
import Head from "next/head";
import Script from "next/script";

function CustomHead() {
  const siteTitle = "HiReso - Search for similar images";
  const gtagId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={siteTitle} />
        <meta
          property="og:image"
          content={`https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      {!!gtagId && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + gtagId}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
        `}
          </Script>
        </>
      )}
    </>
  );
}

export default CustomHead;
