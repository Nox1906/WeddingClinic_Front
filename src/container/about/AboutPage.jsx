import React from 'react'

import About from './About'
import { Header, Footer } from '../../components'

function AboutPage() {
    return (
        <>
            <Header />
            <div className='app__padding '>
                <About />
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;