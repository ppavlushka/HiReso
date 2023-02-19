import React, { useState } from "react";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchValue); // replace with actual search logic
  };

  return (
    <form
      className="flex justify-center items-center h-screen"
      onSubmit={handleSearch}
    >
      <div className="flex flex-wrap justify-center sm:items-stretch sm:w-full sm:max-w-xl md:max-w-2xl text-xl leading-tight">
        <input
          type="text"
          className="px-5 py-4 border placeholder:text-gray-900 outline-none w-full sm:flex-1 sm:w-auto disabled:opacity-75 disabled:pointer-events-none"
          defaultValue={searchValue}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          disabled={isSearching}
        />
        <button
          type="submit"
          className="mt-3 sm:mt-0 px-8 py-4 bg-custom-blue hover:bg-blue-600 text-white w-full sm:w-auto disabled:opacity-75 disabled:pointer-events-none"
          disabled={isSearching}
        >
          {isSearching ? <span>Wait...</span> : <span>Search</span>}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
