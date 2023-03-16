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
        {/* repeat 5 times */}
        {"12345".split("").map((i) => (
          <>
            <h3 className="text-lg font-medium my-5">Question {i}</h3>

            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut ultricies tincidunt, nisl nisl aliquam nisl,
              sit amet aliquet nisl nisl eget nisl. Sed euismod, nisl ut
              ultricies tincidunt, nisl nisl aliquam nisl, sit amet aliquet nisl
              nisl eget nisl. Sed euismod, nisl ut ultricies tincidunt, nisl
              nisl aliquam nisl, sit amet aliquet nisl nisl eget nisl. Sed
              euismod, nisl ut ultricies tincidunt, nisl nisl aliquam nisl, sit
              amet aliquet nisl nisl eget nisl.
            </p>
          </>
        ))}
      </div>
    </Layout>
  );
}

export default Terms;
