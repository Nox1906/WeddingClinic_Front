import React from 'react'

import Photos from './Photos'
import About from '../about/About';
import Intro from './Intro';
import Testimonial from './Testimonial';
import { Header, Footer } from '../../components'

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <div className='app__padding app__spacing '>
        <About />
        <Photos />
        <Testimonial />
      </div>
      <Footer />
    </>
  )
};

export default Home;