import React from 'react'
import Header from '../components/Header'
import Banner from '../features/Banner'
import Movies from '../features/Movies'
import Serial from '../features/Serial'
import TopMovies from '../features/TopMovies'


const Home = () => {
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