import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Movies/React-slick.css';
import SingleSeries from './SingleSeries';
import TopRatedSeries from './TopRatedSeries';
 // Ensure the import path is correct

const TrendingSeries = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    const fetchTrendingSeries = async () => {
      const url = `https://api.themoviedb.org/3/tv/popular?api_key=f99fe2f94b20db2c492d8cf1d35ab741&include_adult=false&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrendingSeries(data.results);
      } catch (error) {
        console.error("Error fetching trending series:", error);
      }
    };

    fetchTrendingSeries();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
      <p className='text-4xl text-white font-bold mt-20 mb-10 text-center'>Trending Series</p>
      <Slider {...sliderSettings}>
        {
          trendingSeries.map((singleSeries) => (
            <SingleSeries
              key={singleSeries.id} 
              singleSeries={singleSeries}
            />
          ))
        }
      </Slider>
    </div>
  );
};

export default TrendingSeries;
