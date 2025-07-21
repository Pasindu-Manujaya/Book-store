import React from 'react'
import Banner from './Banner'
import BookSeller from './BookSeller'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BookSeller/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
