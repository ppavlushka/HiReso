import Image from "next/image";

const SearchResults = ({ imageUrl, links, onSelect = () => {}, limit = 6 }) => {
  return (
    <div className="w-full md:max-w-2xl lg:max-w-screen-lg mx-auto">
      <div className="text-lg font-medium mb-3">Preview</div>
      <div className="relative w-full aspect-video mb-12">
        <Image
          src={imageUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Image"
          priority
          unoptimized
        />
      </div>
      <div className="text-lg font-medium mb-3">Download Links:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 text-lg">
        {links.slice(0, limit).map((link, index) => (
          <button
            key={index}
            className="px-8 py-4 bg-custom-darkgray text-white text-center"
            onClick={(evt) => onSelect(index)}
          >
            {link.width}x{link.height}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
