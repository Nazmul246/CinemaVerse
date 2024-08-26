import React, { useEffect, useState } from 'react';
import SingleMovies from '../Movies/SingleMovies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './React-slick.css'

const MostRatedMovies = () => {
  const [mostRatedMovies, setMostRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMostRatedMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false');
        const data = await response.json();
        setMostRatedMovies(data.results);
      } catch (error) {
        console.error('Error fetching most rated movies:', error);
      }
    };

    fetchMostRatedMovies();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust the number of items per slide
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='m-8 sm:m-8'>
      <h2 className='text-4xl text-white font-bold mt-20 mb-10 text-center'>Most Rated Movie</h2>
      <Slider {...sliderSettings}>
        {mostRatedMovies.map((movie) => (
          <SingleMovies key={movie.id} singleMovie={movie} />
        ))}
      </Slider>
  </div>
  );
};

export default MostRatedMovies;
