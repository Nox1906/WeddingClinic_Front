import React, {useState , useEffect} from 'react'

import { WeddingButton } from '../../components'
import { client } from '../../client';

import './Photos.scss'
import { Carousel } from '../../components'

const Photos = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      setGallery(data[0].image);
    });


  }, []);

  return (
    <div className='app__photos app__flex app__spacing'>
      <section className='app__section'>
        <div className='app__Title'>
          <h2>Vestidos em destaque</h2>
        </div>
      </section>
      <div className='app__flex app__photos-gallery app__spacing'>
        <Carousel images={gallery} ></Carousel>
      </div>
      <div className='app__flex app__spacing' style={{flexDirection: 'column'}}>
        <p>Para ver mais vestidos</p>
        <WeddingButton color='pink' linkId='Collections' textButton='Clique aqui' />
      </div>
    </div>
  )
}

export default Photos;