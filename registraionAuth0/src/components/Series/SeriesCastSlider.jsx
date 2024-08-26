import React from 'react';
import Slider from 'react-slick';

const SeriesCastSlider = ({ cast }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="series-cast-slider">
      <h2 className="text-2xl font-bold mb-4 pl-12 text-white">Series Cast</h2>
      <Slider {...settings}>
        {cast.map((actor) => {
          const profileUrl = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg';

          return (
            <div key={actor.id} className="p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={profileUrl} alt={actor.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-black font-bold truncate">{actor.name}</p>
                  <p className="text-gray-600 truncate">{actor.character}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SeriesCastSlider;