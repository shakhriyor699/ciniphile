import React, { FC } from 'react'
import Header from '../components/Header'
import Banner from '../features/Banner'
import Movies from '../features/Movies'
import Serial from '../features/Serials'
import TopMovies from '../features/TopMovies'


const Home: FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Movies />
      <Serial />
      <TopMovies />
    </div>
  )
}

export default Home