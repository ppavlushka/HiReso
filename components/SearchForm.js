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
      const response = await axios.post("/api/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onSubmit(response.data.url);
    } catch (error) {
      toast.error(error?.message || "Something went wrong! Please try again.");
    }
  };
  const onDrop = useCallback(fileUploadCallback, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: openFileDialog,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
    noClick: true,
    noKeyboard: true,
    maxSize: 1024 * 1024 * 2,
  });

  return (
    <div
      className={"w-full flex flex-col justify-center items-center py-5"}
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <form
        onSubmit={handleSearch}
        className={classNames(
          "flex flex-wrap justify-center sm:items-stretch leading-tight",
          className
        )}
      >
        {/* Drag an image here or u pload a file */}
        <div className="w-full text-center mb-10 text-custom-placeholder">
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
          </a>
        </div>
        <input
          type="url"
          className="px-5 py-3 border border-custom-border text-custom-inputtext placeholder:text-custom-placeholder bg-custom-inputbg  outline-none w-full sm:flex-1 sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] sm:rounded-r-none"
          defaultValue={searchUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          disabled={isSearching}
          required
        />
        <button
          type="submit"
          className="mt-3 sm:mt-0 px-7 py-3 bg-custom-blue hover:bg-custom-hoverblue focus:bg-custom-hoverblue focus:outline-none  text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none rounded-[5px] sm:rounded-l-none transition-colors"
          disabled={isSearching}
        >
          {isSearching ? "Wait..." : "Search"}
        </button>
        {error && (
          <div className="text-danger mt-8 w-full text-center">{error}</div>
        )}
      </form>
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
