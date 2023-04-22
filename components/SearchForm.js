import classNames from "classnames";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-hot-toast";
import axios from "axios";

const SearchForm = ({
  searchUrl = "",
  isSearching,
  onSubmit = () => {},
  className = "",
  error = null,
}) => {
  const defaultSearch =
    process.env.NODE_ENV === "production"
      ? ""
      : "https://www.shutterstock.com/shutterstock/photos/1922207963/display_1500/stock-photo-beautiful-attractive-stylish-woman-in-yellow-dress-and-straw-hat-holding-daisy-flower-romantic-mood-1922207963.jpg";

  const [search, setSearch] = useState(searchUrl || defaultSearch);
  const [isUploading, setIsUploading] = useState(false);
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(search);
  };

  const fileUploadCallback = async (acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      const response = await axios.post("/api/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onSubmit(response.data.url);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong! Please try to upload again."
      );
    } finally {
      setIsUploading(false);
    }
  };
  const fileRejectedCallback = (fileRejections) => {
    try {
      const { errors } = fileRejections[0];
      const { message } = errors[0];
      toast.error(message);
    } catch (e) {
      toast.error("File has been rejected for unknown reason.");
    }
  };

  const onDropAccepted = useCallback(fileUploadCallback, []);
  const onDropRejected = useCallback(fileRejectedCallback, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: openFileDialog,
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    multiple: false,
    accept: { "image/*": [] },
    noClick: true,
    noKeyboard: true,
    maxSize: 1024 * 1024 * 4,
  });

  return (
    <div
      className={
        "w-full sm:flex sm:flex-col sm:justify-around sm:items-center sm:py-5"
      }
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="leading-tight text-center text-black">
        <p className="text-[28px] sm:text-[32px] md:text-[46px] font-bold mb-4">
          👋
        </p>
        <p className="text-[24px] sm:text-[28px] md:text-[42px] mb-4">
          From Blurry & Watermarked
          <br />
          <strong>to Brilliant & Hi-Res.</strong>
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium">
          Find, Enhance, and Enlarge Images with hiReso&apos;s Expertise
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className={classNames(
          "flex flex-wrap justify-center sm:items-stretch leading-tight my-10",
          className
        )}
      >
        <input
          type="url"
          className="px-5 py-3 border border-custom-border text-custom-inputtext placeholder:text-custom-placeholder bg-custom-inputbg  outline-none w-full sm:flex-1 sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] sm:rounded-r-none"
          defaultValue={searchUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          disabled={isSearching || isUploading}
          required
        />
        <button
          type="submit"
          className="mt-3 sm:mt-0 px-7 py-3 bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] sm:rounded-l-none transition-colors"
          disabled={isSearching || isUploading}
        >
          {isSearching ? "Wait..." : "Search"}
        </button>
        {error && (
          <div className="text-danger mt-8 w-full text-center">{error}</div>
        )}
        {/* Drag an image here or u pload a file */}
        <div className="w-full text-center mt-4 text-custom-placeholder">
          {isUploading ? (
            <span>Uploading...</span>
          ) : (
            <>
              Drag an image here or{" "}
              <a
                href="#"
                className="text-custom-blue hover:text-custom-hoverblue focus:text-custom-hoverblue"
                onClick={(evt) => {
                  evt.preventDefault();
                  openFileDialog();
                }}
              >
                upload a file
              </a>{" "}
              (max 4MB)
            </>
          )}
        </div>
      </form>
      <div className={className}>
        <iframe
          className="w-full sm:w-109 aspect-video"
          src="https://www.youtube.com/embed/c97ImOcdAcg?controls=0"
          title="Hireso Demo Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {isDragActive && (
        <>
          <div className="fixed inset-0 bg-dialog-overlay backdrop-blur-sm flex items-center justify-center">
            <p className="text-2xl sm:text-4xl md:text-8xl text-white">
              DROP HERE
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchForm;
