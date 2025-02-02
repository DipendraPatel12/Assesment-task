import { useState } from "react";

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="Search Product"
        value={query}
        onChange={handleSearch}
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
