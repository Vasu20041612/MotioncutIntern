import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [category, setCategory] = useState('Everything');
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    'Everything',
    'Software Development',
    'Web Development',
    'Data Analyst',
    'IT Consultant',
    'Network Administrator'
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    setDropdownOpen(false);
  };

  const handleSearch = () => {
    console.log(`Searching for "${query}" in category "${category}"`);
  };

  return (
    <div className="search-container">
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {category}
          <span className={` ${dropdownOpen ? "arrow-up":"arrow"}`}></span>
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            {categories.map((cat) => (
              <div key={cat} onClick={() => handleCategoryClick(cat)} className="dropdown-item">
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Anything"
        />
        <i className="fas fa-search search-icon" onClick={handleSearch}></i>
      </div>
    </div>
  );
};

export default SearchBar;
