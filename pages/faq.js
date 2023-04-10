import React from "react";
import Layout from "../components/Layout";

function Terms() {
  return (
    <Layout
      mainClassName=""
      leftComponent={
        <div className="flex items-center text-2xl text-[#6c6c6c] self-center">
          FAQ
        </div>
      }
    >
      <div className="w-full md:max-w-2xl mx-auto px-3 py-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <p className="text-muted text-xl mb-8">
          Frequently asked questions about HiReso.
        </p>

        <h3 className="text-lg font-medium my-5">What is HiReso?</h3>
        <p className="mb-4">
          HiReso is a simple search engine that allows users to search for
          images by entering an image URL or uploading image.
        </p>
        <h3 className="text-lg font-medium my-5">
          What is the difference between the free and paid plans on HiReso?
        </h3>
        <p className="mb-4">
          HiReso offers a free plan that includes 5 free searches for all new
          users. Paid plans include a subscription for 30 searches per month or
          one-time purchases for 5, 10, or 20 searches.
        </p>
        <h3 className="text-lg font-medium my-5">
          How can I enlarge an image using HiReso?
        </h3>
        <p className="mb-4">
          A: Users can enlarge any image they are looking for by clicking on the
          button in the search results.
        </p>
        <h3 className="text-lg font-medium my-5">
          Can I use HiReso to search for copyrighted images?
        </h3>
        <p className="mb-4">
          Yes, users can search for copyrighted images using HiReso. However, it
          is important to note that using copyrighted images without permission
          or a proper license can result in legal consequences. As a search
          engine, we do not have control over the images that users search for
          or use on our platform. It is the responsibility of the user to ensure
          that they have the proper permissions or licenses for any images they
          use.
        </p>
        <h3 className="text-lg font-medium my-5">
          What happens if I exceed my search limit on HiReso?
        </h3>
        <p className="mb-4">
          If you exceed your search limit on HiReso, you will need to upgrade to
          a paid plan.
        </p>
        <h3 className="text-lg font-medium my-5">
          How can I cancel my subscription on HiReso?
        </h3>
        <p className="mb-4">
          Users can cancel their subscription on HiReso at any time by logging
          into their account and navigating to the &quot;My Profile&quot;
          section.
        </p>
        <h3 className="text-lg font-medium my-5">
          Do you offer refunds for paid plans or extra searches?
        </h3>
        <p className="mb-4">
          We offer refunds on a case-by-case basis. If you&apos;re not satisfied
          with your purchase, please contact our support team for assistance.
        </p>
        <h3 className="text-lg font-medium my-5">
          What types of images can I search for on HiReso?
        </h3>
        <p className="mb-4">
          HiReso allows users to search for any type of image.
        </p>
        <h3 className="text-lg font-medium my-5">
          How do I contact customer support on HiReso?
        </h3>
        <p className="mb-4">
          Users can contact HiReso&apos;s customer support team by emailing{" "}
          <a
            class="text-custom-blue hover:text-custom-hoverblue focus:text-custom-hoverblue"
            href="mailto:info@hireso.io"
          >
            info@hireso.io
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}

export default Terms;
