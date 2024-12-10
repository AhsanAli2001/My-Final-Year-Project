import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Handle form submit (when user presses Enter or clicks the button)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to the SearchResults page with the query as a URL parameter
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-icon">
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
