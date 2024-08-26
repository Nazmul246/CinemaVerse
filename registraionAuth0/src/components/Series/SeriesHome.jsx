import React from 'react'

import TopRatedSeries from './TopRatedSeries'
import TrendingSeries from './TrendingSeries';

const SeriesHome = () => {
  return (
    <div>
      {/* <AllSeries/> */}
        <TrendingSeries/>
        <TopRatedSeries/>
    </div>
  )
}

export default SeriesHome;