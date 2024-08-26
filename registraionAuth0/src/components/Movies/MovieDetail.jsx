import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastSlider from './CastSlider';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=f99fe2f94b20db2c492d8cf1d35ab741&append_to_response=credits,videos`;
      const response = await fetch(movieUrl);
      const data = await response.json();
      setMovie(data);
      setCast(data.credits.cast);
      
      // Extract trailer key
      const trailer = data.videos.results.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const { title, poster_path, overview, vote_average, release_date, runtime, genres, backdrop_path } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg';

  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : 'https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg';

  return (
    <div className="relative text-white">
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{ 
          backgroundImage: `url(${backdropUrl})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(4px)', 
          height: '100%', 
          width: '100%',
        }}
      >
        <div 
          className="absolute inset-0 bg-black/50"
          style={{ 
            height: '100%', 
            width: '100%',
            position: 'absolute', 
            top: 0, 
            left: 0
          }}
        ></div>
      </div>
     

      {/* Movie Poster and Basic Info */}
      <div className='border-8'>
      <div className=" relative flex flex-col gap-24 items-start md:flex-row mb-8 mt-11 lg:items-center lg:justify-center lg:mx-auto lg:w-full lg:max-w-6xl">
        <img
          src={posterUrl}
          alt={title}
          className="w-full md:w-1/3 lg:w-1/4 rounded-lg mb-4 md:mb-0 lg:mb-0 lg:mx-auto"
        />
        <div className="md:ml-8 p-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4">{overview}</p>
          <p className="mb-2">
            <strong>Release Date:</strong> {new Date(release_date).toLocaleDateString()}
          </p>
          <p className="mb-2">
            <strong>Runtime:</strong> {runtime} minutes
          </p>
          <p className="mb-2 text-yellow-500">
            <strong>Rating:</strong> {vote_average}
          </p>
          <p className="mb-2">
            <strong>Genres:</strong> {genres.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </div></div>

      {trailerKey && (
        <div className="relative pb-8 pt-6 text-center">
        <p className='pb-4 text-xl font-semibold'>Watch {title} Trailer</p>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-4xl h-64 md:h-80 lg:h-96"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      
      )}

      {/* Cast Slider */}
      <div className="p-12">
        <CastSlider cast={cast} />
      </div>
    </div>
  );
};

export default MovieDetail;
