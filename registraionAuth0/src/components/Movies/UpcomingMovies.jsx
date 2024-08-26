import React, { useEffect, useState } from 'react';
import SingleMovies from './SingleMovies'; // Assuming you have this component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './React-slick.css'

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const today = new Date().toISOString().split('T')[0];
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false&release_date.gte=${today}&sort_by=release_date.desc`;
      const response = await fetch(url);
      const data = await response.json();
      setUpcomingMovies(data.results);
    };

    fetchUpcomingMovies();
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
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='m-8 sm:m-8'>
      <p className='text-4xl text-white font-bold mt-20 mb-10 text-center'>Upcoming Movies</p>
      <Slider {...sliderSettings}>
        {upcomingMovies.map(movie => (
          <SingleMovies key={movie.id} singleMovie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingMovies;
