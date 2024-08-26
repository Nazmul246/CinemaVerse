import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HeroImage from '../HeroImage/HeroImage';
import { Outlet } from 'react-router-dom';
import MostRatedMovies from '../Movies/MostRatedMovies';
import UpcomingMovies from '../Movies/UpcomingMovies';
import HomeSlider from '../HeroImage/HomeSlider';
import TrendingMovies from '../Movies/TrendingMovies';
import TrendingSeries from '../Series/TrendingSeries';
import TopRatedSeries from '../Series/TopRatedSeries';
import Footer from '../Footer/Footer';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const images = [
    '/assets/images/dead-main1.png',
    '/assets/images/slider2.png',
    '/assets/images/alien-main.png',
    '/assets/images/Twister-main.png',
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate(`/search?query=${query}`);
  };


  return (
    <div className='layout-container'>
      <Navbar />
      <div className='main-content'>
        <Outlet />
        {location.pathname === '/' && (
          <>
            <HomeSlider images={images} />
            <HeroImage onSearch={handleSearch} />
            <TrendingMovies />
            <TrendingSeries/>
            <MostRatedMovies />
            <TopRatedSeries/>
            <UpcomingMovies />
            <div className='text-white text-center mt-28 mb-14'>
              <h1 className='text-4xl'>Can't find the movie you're looking for? Sign up now and request it directly</h1> <br />
              <h1 className='text-2xl text-emerald-500'>Your favorite movies are just a click away!</h1>
            </div>
          </>
        )}
      </div>
      
      <Footer/>
    </div>
  );
};

export default Home;
