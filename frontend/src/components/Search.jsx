import React, { useState, useEffect } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

const Search = ({ suggestions }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  useEffect(() => {
    if (query) {
      const timeoutId = setTimeout(() => {
        const filtered = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().startsWith(query.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(filteredSuggestions[activeSuggestionIndex]);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    }
  };

  const clearInput = () => {
    setQuery("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="md:relative md:w-50">
      <form className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
        <input
          type="text"
          name="query"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={query}
          placeholder="Search..."
          className="flex-1 font-normal border-none outline-none bg-transparent"
          aria-label="Search input"
        />
        {query && (
          <button type="button" onClick={clearInput} aria-label="Clear input">
            <IoClose className="text-gray-500 mr-2" />
          </button>
        )}
        <button type="submit" aria-label="Search">
          <IoSearch className="text-gray-500 mr-2" />
        </button>
      </form>
      {showSuggestions && (
        <ul
          className="absolute border border-gray-300 bg-white font-normal md:w-full mt-1 rounded max-h-60 overflow-y-auto z-10"
          aria-label="Suggestions list"
        >
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => {
              let className = "cursor-pointer p-2";
              if (index === activeSuggestionIndex) {
                className += " bg-gray-200";
              }
              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={() => handleClick(suggestion)}
                  role="option"
                  aria-selected={index === activeSuggestionIndex}
                >
                  {suggestion}
                </li>
              );
            })
          ) : (
            <li className="cursor-pointer font-normal p-2" aria-live="polite">
              No suggestions available
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
