import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMovies = ({ singleMovie}) => {

  const {title, release_date, vote_average} = singleMovie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${singleMovie.id}`);
  };

  // Define the poster URL, fallback to placeholder if not available
  const posterUrl = singleMovie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

    return (
      <div className="bg-gray-800 p-2 shadow-lg max-w-full sm:max-w-72 mx-2 sm:mx-4 cursor-pointer transition-transform duration-800 ease-in transform hover:scale-110 hover:shadow-red-800 mb-8" onClick={handleClick}>
        <img
          src={posterUrl}
          alt={singleMovie.title}
          className="w-full p-4 rounded-3xl object-cover sm:h-48 md:h-64"
        />
        <h3 className="text-sm font-semibold pt-2 pb-2 pl-2 text-white font-poppins truncate">{title}</h3>
        <div className="flex items-center justify-between pt-1 pb-4 pl-2 pr-2">
          <p className="text-gray-400 text-xs sm:text-sm truncate">{release_date}</p>
          <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            {vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    );
    
};

export default SingleMovies;
