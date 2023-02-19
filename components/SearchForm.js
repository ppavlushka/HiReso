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
    <form className="flex justify-center items-center h-screen">
      <div className="flex items-center">
        <input
          type="text"
          className="px-4 py-2 border outline-none"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
