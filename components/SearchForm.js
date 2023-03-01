import React, { useState } from "react";

const SearchForm = ({
  searchUrl = "",
  isSearching,
  onSubmit = () => {},
  className = "",
}) => {
  const [search, setSearch] = useState(searchUrl);
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={
        "flex flex-wrap justify-center sm:items-stretch w-full md:max-w-xl leading-tight" +
        className
      }
    >
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
    </form>
  );
};

export default SearchForm;
