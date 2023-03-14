import React from 'react'
import Header from '../components/Header'
import Banner from '../features/Banner'
import Movies from '../features/Movies'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Movies />
    </div>
  )
}

export default Home