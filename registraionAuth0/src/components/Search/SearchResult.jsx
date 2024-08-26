import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroImage from '../HeroImage/HeroImage';
import SingleMovies from '../Movies/SingleMovies';
import SingleSeries from '../Series/SingleSeries';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query') || '';
  const [movieList, setMovieList] = useState([]);
  const [tvShowList, setTvShowList] = useState([]);

  const getMoviesAndTVShows = (query) => {
    const movieUrl = query 
      ? `https://api.themoviedb.org/3/search/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&query=${query}&sort_by=release_date.desc&include_adult=false&with_original_language=en`
      : 'https://api.themoviedb.org/3/discover/movie?api_key=f99fe2f94b20db2c492d8cf1d35ab741&sort_by=release_date.desc&include_adult=false&with_original_language=en';

    const tvUrl = query 
      ? `https://api.themoviedb.org/3/search/tv?api_key=f99fe2f94b20db2c492d8cf1d35ab741&query=${query}&sort_by=first_air_date.desc&include_adult=false&with_original_language=en`
      : 'https://api.themoviedb.org/3/discover/tv?api_key=f99fe2f94b20db2c492d8cf1d35ab741&sort_by=first_air_date.desc&include_adult=false&with_original_language=en';

    fetch(movieUrl)
      .then(res => res.json())
      .then(json => setMovieList(json.results || []));

    fetch(tvUrl)
      .then(res => res.json())
      .then(json => setTvShowList(json.results || []));
  };

  useEffect(() => {
    getMoviesAndTVShows(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <div>
      <HeroImage onSearch={handleSearch} initialQuery={searchQuery} />
        <div>
          <div>
            <p className='text-2xl text-center font-bold text-green-500'>
              {movieList.length + tvShowList.length > 0 
                ? `${movieList.length + tvShowList.length} results found for "${searchQuery}"` 
                : `No results found for "${searchQuery}"`}
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-4 sm:m-8 md:m-10 lg:m-12'>
            {
              movieList.map((singleMovie) => (
                <SingleMovies
                  key={singleMovie.id}
                  singleMovie={singleMovie}
                />
              ))
            }
            {
              tvShowList.map((singleShow) => (
                <SingleSeries
                  key={singleShow.id}
                  singleSeries={singleShow} // You might want to rename this prop to something more generic like `singleItem`.
                />
              ))
            }
          </div>
        </div>
    </div>
  );
};

export default SearchResults;
