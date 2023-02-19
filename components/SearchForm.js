import React, { useState } from "react";

const SearchForm = ({ searchUrl = "", isSearching, onSubmit = () => {} }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(searchUrl);
    console.log(searchUrl); // replace with actual search logic
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-wrap justify-center sm:items-stretch sm:w-full sm:max-w-xl md:max-w-2xl text-xl leading-tight"
    >
      <input
        type="url"
        className="px-5 py-4 border placeholder:text-gray-900 outline-none w-full sm:flex-1 sm:w-auto disabled:opacity-75 disabled:pointer-events-none"
        defaultValue={searchUrl}
        onChange={handleInputChange}
        placeholder="Enter image URL"
        disabled={isSearching}
        required
      />
      <button
        type="submit"
        className="mt-3 sm:mt-0 px-8 py-4 bg-custom-blue hover:bg-blue-600 text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none"
        disabled={isSearching}
      >
        {isSearching ? <span>Wait...</span> : <span>Search</span>}
      </button>
    </form>
  );
};

export default SearchForm;
