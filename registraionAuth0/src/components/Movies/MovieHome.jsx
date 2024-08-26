import React from 'react'
import AllCatTogeth from './AllCatTogeth'
import ListOfMovies from './ListOfMovies'
import TrendingMovies from './TrendingMovies'
import TrendingSeries from '../Series/TrendingSeries'
import MostRatedMovies from './MostRatedMovies'
import TopRatedSeries from '../Series/TopRatedSeries'
import UpcomingMovies from './UpcomingMovies'

const MovieHome = () => {
    
  return (
    <div>
        <ListOfMovies/>
        {/* <TrendingMovies/>
        <TrendingSeries/>
        <MostRatedMovies/>
        <TopRatedSeries/>
        <UpcomingMovies/> */}
    </div>
  )
}

export default MovieHome