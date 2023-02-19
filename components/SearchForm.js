import React, { useState } from "react";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

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
      <div className="flex flex-wrap justify-center sm:items-stretch sm:w-full sm:max-w-xl md:max-w-2xl">
        <input
          type="text"
          className="px-5 py-4 border placeholder:text-gray-900 text-xl outline-none w-full sm:flex-1 sm:w-auto"
          defaultValue={searchValue}
          onChange={handleInputChange}
          placeholder="Enter image URL"
        />
        <button
          type="submit"
          className="mt-3 sm:mt-0 px-8 py-4 bg-custom-blue hover:bg-blue-600 text-xl text-white w-full sm:w-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
