// ListOfMovies.jsx
import React, { useEffect, useState } from 'react';
import SingleMovies from './SingleMovies';
import MostRatedMovies from './MostRatedMovies';
import UpcomingMovies from './UpcomingMovies';
import FilterOptions from '../FilterOptions/FilterOptions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './React-slick.css'



const ListOfMovies = ({ searchQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const [filters, setFilters] = useState({});

  const getMovies = (query, filters) => {
    let url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false&query=${query}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false`;

    if (filters.genre) url += `&with_genres=${filters.genre}`;
    if (filters.releaseYear) url += `&primary_release_year=${filters.releaseYear}`;
    if (filters.rating) url += `&vote_average.gte=${filters.rating}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        const today = new Date().toISOString().split('T')[0];
        const filteredMovies = json.results.filter(movie => movie.release_date <= today);
        const sortedMovies = filteredMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        setMovieList(sortedMovies);
      });
  };

  useEffect(() => {
    getMovies(searchQuery, filters);
  }, [searchQuery, filters]);

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6, // Adjust the number of items per slide
  //   slidesToScroll: 2,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         dots: false,
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }

  return (
    <div className=''>
      <FilterOptions onFilterChange={setFilters} />

      <p className='text-4xl text-white font-bold mt-20 mb-10 text-center'>All Movies</p>
      
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-4 sm:m-8 md:m-10 lg:m-12'>
      {/* <Slider {...sliderSettings}> */}
        {
          movieList.map((singleMovie) => (
            <SingleMovies
              key={singleMovie.id} 
              singleMovie={singleMovie}
            />
          ))
        }
        {/* </Slider> */}
        </div>
        
    </div>
  );
};

export default ListOfMovies;
