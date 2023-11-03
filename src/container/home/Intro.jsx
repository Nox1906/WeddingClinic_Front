import React from 'react'

import './Intro.scss'
import { videos } from '../../constants';
import { WeddingButton } from '../../components';

const Intro = () => {
  return (
    <div className='app__intro app__flex'>
      <div style={{ position: 'absolute' , zIndex: 1}}>
        <WeddingButton color='white' linkId='Appointments' textButton='Marque uma visita' />
      </div>

      <video autoPlay loop muted  >
        <source
          src={videos.wedding}
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Intro


