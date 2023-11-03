import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { client } from '../../client';
import { testimonialsBackground } from '../../assets'
import './Testimonial.scss';

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

  }, []);

  return (
    <>
      {testimonials.length && (
        <div className='app__testimonial app__spacing app__flex'>
          <div className='app__Title'>
            <h2>Algumas das nossas noivas</h2>
          </div>
          <div
            className='app__testimonial-item app__flex app__spacing'
            style={{ backgroundImage: `url(${testimonialsBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='app__testimonial-item-container app__flex'>
              <div className='app__testimonial-btns'>
                <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft />
                </div>
              </div>
              <div className='app__testimonial-content'>
                <img src={testimonials[currentIndex].imgurl +  '?not-from-cache-please'} alt={testimonials[currentIndex].name} crossOrigin='anonymous'/>
                <p className='p-text app__spacing'>{testimonials[currentIndex].feedback}</p>
                <p className='p-text p-text-bold app__spacing'>{testimonials[currentIndex].name}</p>
              </div>
              <div className='app__testimonial-btns'>
                <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                  <HiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  )
};

export default Testimonial;


// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJCe2WJYxJGQ0RJkxMKu8ZZIg&fields=reviews&key=AIzaSyA15oznlUc48aLHlP8rzgyqsObqvEuQ6VM
