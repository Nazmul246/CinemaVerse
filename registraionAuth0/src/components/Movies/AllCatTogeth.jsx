import React, { useEffect, useState } from 'react';
import SingleMovies from './SingleMovies';

const AllCatTogeth = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularRes, discoverRes, topRatedRes] = await Promise.all([
          fetch('https://api.themoviedb.org/3/movie/popular?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false'),
          fetch('https://api.themoviedb.org/3/discover/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false'),
          fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false')
        ]);

        const [popularData, discoverData, topRatedData] = await Promise.all([
          popularRes.json(),
          discoverRes.json(),
          topRatedRes.json()
        ]);

        // Combine the results into one array
        const combinedMovies = [
          ...popularData.results,
          ...discoverData.results,
          ...topRatedData.results
        ];

        setMovies(combinedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
        <div className="flex flex-wrap justify-center">
      {movies.map(movie => (
        <SingleMovies key={movie.id} singleMovie={movie} />
      ))}
    </div>
    </div>
  )
}

export default AllCatTogeth