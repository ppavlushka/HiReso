import Image from "next/image";

const SearchResults = ({
  searchUrl,
  images,
  onSelect = () => {},
  limit = 6,
}) => {
  return (
    <div className="w-full md:max-w-2xl lg:max-w-screen-lg mx-auto">
      <div className="text-lg font-medium mb-6">Preview</div>
      <div className="relative w-full aspect-video mb-16">
        <Image
          src={searchUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Image"
          priority
          unoptimized
        />
      </div>
      <div className="text-lg font-medium mb-4">Download Links:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 text-lg">
        {images.slice(0, limit).map((image, index) => (
          <a
            key={index}
            className="px-7 py-4 bg-custom-darkgray hover:bg-gray-700 transition-colors text-white text-center rounded-[5px] inline-flex items-center justify-center"
            onClick={() => onSelect(image)}
            target="_blank"
            rel="noopener noreferrer"
            href={image.link}
          >
            <span>
              {image.width}x{image.height}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
