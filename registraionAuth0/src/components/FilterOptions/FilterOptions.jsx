// FilterOptions.jsx
import React, { useState } from 'react';

const FilterOptions = ({ onFilterChange }) => {
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ genre, releaseYear, rating });
  };
  

  return (
    <div className="relative py-8 px-32 md:py-16 md:px-64 filter-options">
        <div className="absolute inset-0 z-[-1] bg-blue-500" 
            style={{ 
              filter: 'blur(8px)', 
              backgroundColor: 'rgba(0, 0, 255, 0.4)' // Blue overlay with transparency
            }}>
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Filter Options</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-80 justify-center items-center relative">
          <div className="w-full md:w-auto mb-4">
            <label className="block mb-2 text-white text-center md:text-left">Genre</label>
            <select 
              value={genre}
              onChange={(e) => setGenre(e.target.value)} 
              className="w-full text-xs lg:text-lg md:w-auto p-2 border rounded"
            >
              <option value="">All Genres</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="10751">Family</option>
              <option value="10749">Romance</option>
              {/* Add more genres as needed */}
            </select>
          </div>
          <div className="w-full md:w-auto mb-4">
            <label className="block mb-2 text-white text-center md:text-left">Release Year</label>
            <input 
              type="number" 
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)} 
              placeholder="YYYY"
              className="w-full md:w-auto p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-auto mb-4">
            <label className="block mb-2 text-white text-center md:text-left">Rating</label>
            <input 
              type="number" 
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)} 
              placeholder="Rating"
              className="w-full md:w-auto p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleFilterChange}
            className="relative inline-flex bg-white items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative text-sm lg:text-1xl md:text-md sm:text-sm">Apply Filter</span>
          </button>
        </div>
      </div>


  );
};

export default FilterOptions;
