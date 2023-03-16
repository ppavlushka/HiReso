import React from "react";
import Layout from "../components/Layout";

function Terms() {
  return (
    <Layout
      mainClassName=""
      leftComponent={
        <div className="flex items-center text-2xl text-[#6c6c6c] self-center">
          Privacy & Terms
        </div>
      }
    >
      <div className="w-full md:max-w-2xl mx-auto px-3 py-12">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="text-muted text-xl mb-8">
          We know it’s tempting to skip these Terms of Service, but it’s
          important to establish what you can expect from us as you use HiReso,
          and what we expect from you.
        </p>
        <p className="mb-4">
          By using HiReso&apos;s search service, you agree to be bound by the
          following Terms and Conditions & Privacy Policy.
        </p>

        <h3 className="text-lg font-medium my-5">
          Content Linked to by HiReso
        </h3>

        <p className="mb-4">
          The images displayed as search results or linked to by HiReso are
          developed by people over whom HiReso exercises no control. The search
          results that appear from HiReso are indexed by different Search
          Engine&apos;s automated machinery and computers, not ours, and HiReso
          cannot and does not screen the sites. A search using HiReso may
          produce search results and links to sites that some people find
          objectionable, inappropriate, or offensive. We cannot guarantee that a
          HiReso search will not locate unintended or objectionable content and
          assume no responsibility for the content of any site included in any
          search results or otherwise linked to by the HiReso.
        </p>

        <h3 className="text-lg font-medium my-5">Personal Use Only</h3>

        <p className="mb-4">
          The HiReso are made available for your personal, non-commercial use
          only. You may not use the HiReso to sell an image, or to use it for
          commercial reasons. You may not take the results from a HiReso search
          and reformat and display them, or mirror the HiReso home page or
          results pages on your Web site.
        </p>

        <h5 className="font-semibold my-5">No Automated Querying</h5>

        <h3 className="text-lg font-semibold my-5">
          Changes In Terms and Conditions and Google Search Service
        </h3>
        <p className="mb-4">
          We may modify or terminate our services from time to time, for any
          reason, and without notice, including the right to terminate with or
          without notice, without liability to you, any other user or any third
          party. We reserve the right to modify these Terms of Service from time
          to time without notice. Please review these Terms of Service from time
          to time so that you will be apprised of any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-12">Privacy Policy</h2>
        <p>
          We collect information about you and your activity in our service,
          like terms that you search for. We collect information about your
          location when you use our service. We do not share your personal
          information with companies, organisations or individuals outside of
          HiReso except in legal reasons.
        </p>
      </div>
    </Layout>
  );
}

export default Terms;
