import React from "react";

import Image from "next/image";

const SearchResults = ({ imageUrl, result }) => {
  const links = result.image_results.map(
    ({ original_image }) => original_image
  );
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="text-lg font-medium mb-3">Preview</div>
      <div className="relative w-full aspect-video mb-12">
        <Image
          src={imageUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Image"
        />
      </div>
      <div className="text-lg font-medium mb-3">Download Links:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 text-lg">
        {links.concat(links).map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-custom-darkgray text-white text-center"
          >
            {link.width}x{link.height}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
