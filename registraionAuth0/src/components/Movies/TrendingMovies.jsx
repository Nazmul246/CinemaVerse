import React, { useEffect, useState } from 'react';
import SingleMovies from './SingleMovies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './React-slick.css'

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const today = new Date().toISOString().split('T')[0];
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
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
      <p className='text-4xl text-white font-bold mt-20 mb-10 text-center'>Trending Movies</p>
      <Slider {...sliderSettings}>
        {
          trendingMovies.map((singleMovie) => (
            <SingleMovies
              key={singleMovie.id} 
              singleMovie={singleMovie}
            />
          ))
        }
      </Slider>
    </div>
  );
};

export default TrendingMovies;
