'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search songs, artists, albums..."
          className="w-full pl-10 pr-4 py-2 glass rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </form>
  );
};

export default SearchBar;
