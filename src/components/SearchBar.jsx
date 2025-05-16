import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import searchData from "../datas/searchData";

// Utility to remove accents/diacritics
const normalizeText = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  const data = searchData;

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setLoading(true);
      setShowDropdown(true);
      setActiveIndex(-1);

      setTimeout(() => {
        const normQuery = normalizeText(query);
        const results = data.filter((item) =>
          normalizeText(item.title).includes(normQuery)
        );
        setFilteredResults(results);
        setLoading(false);
      }, 500);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
      setLoading(false);
      setActiveIndex(-1);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      window.location.href = filteredResults[activeIndex].link;
      setShowDropdown(false);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matched text (accent-insensitive)
  const highlightMatch = (title) => {
    if (!searchQuery) return title;

    const normTitle = normalizeText(title);
    const normQuery = normalizeText(searchQuery);
    const idx = normTitle.indexOf(normQuery);

    if (idx === -1) return title;

    // Find the real character indexes in the original string
    let realStart = 0,
      realEnd = 0,
      normIdx = 0;
    for (let i = 0; i < title.length; i++) {
      if (normalizeText(title[i]) !== "") {
        if (normIdx === idx) realStart = i;
        if (normIdx === idx + normQuery.length) {
          realEnd = i;
          break;
        }
        normIdx++;
      }
    }
    if (!realEnd) realEnd = title.length;

    return (
      <>
        {title.slice(0, realStart)}
        <span className="font-bold bg-yellow-100">
          {title.slice(realStart, realEnd)}
        </span>
        {title.slice(realEnd)}
      </>
    );
  };

  return (
    <div className="relative w-120" ref={searchRef}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
        onFocus={() => searchQuery && setShowDropdown(true)}
      />
      <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 absolute right-3 top-2.5" />
      {showDropdown && (
        <ul className="absolute bg-white border rounded-lg mt-2 w-full shadow-lg z-10 max-h-60 overflow-auto">
          {loading ? (
            <li className="p-2 flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 text-blue-600"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span className="ml-2 text-blue-600">Đang tìm kiếm...</span>
            </li>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((result, idx) => (
              <li
                key={result.id}
                className={`p-2 hover:bg-gray-100 cursor-pointer ${
                  idx === activeIndex ? "bg-blue-100" : ""
                }`}
                onMouseDown={() => (window.location.href = result.link)}
              >
                <span className="text-blue-600 hover:underline">
                  {highlightMatch(result.title)}
                </span>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Không tìm thấy kết quả</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
