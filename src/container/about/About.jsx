import React from 'react'

import './About.scss'
import { images } from '../../constants';

const About = () => {
  return (
      <div className='app__about app__flex app__spacing '>
        <section className="app__section">
          <div className='app__Title'>
            <h2>Acerca de nós</h2>
          </div>
        </section>
        <section className="app__section app__spacing">
          <div className="app__about-section-Container ">
            <div className="app__flexWrap">
              <div className="app__about-section-display">
                <img src={images.frontCard} alt="Wedding Clinic" />
              </div>
              <div className="app__about-section-textContainer">
                <div >
                  <h1>Wedding Clinic</h1>
                  <h3>
                    Vestidos de noiva
                  </h3>
                  <p className='p-text'>
                    Criada para realizar o seu sonho, a Wedding Clinic dispõe de uma vasta gama de vestidos de noiva, para todos os gostos e estilos.</p>
                  <p className='p-text'>Focamo-nos no glamour, qualidade/preço e atendimento personalizado, para que consiga encontrar na Wedding Clinic, o seu vestido de sonho.
                    Be Wedding Clinic!
                    Be Happy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default About;