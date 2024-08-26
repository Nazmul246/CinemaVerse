import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";

const HeroImage = ({ onSearch, initialQuery = '' }) => {
    const placeholders = ['Search...', 'Type something...', 'Looking for something?', 'Start your search here...'];
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    useEffect(() => {
        const interval = setInterval(() => {
          setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    }

    return (
        <form className='relative text-center m-11' onSubmit={handleSearch}>
            <input 
                className='p-2 w-full sm:w-60 md:w-96 transition-all duration-300 ease-in-out sm:focus:w-[50rem] outline-none placeholder-gray-500' 
                type="search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={placeholders[placeholderIndex]}
            />
            <input className='p-2 bg-black text-white cursor-pointer' type="submit" value={'Search'}/>
        </form>

    );
}

export default HeroImage;
