import React from 'react'

import './WeddingButton.scss'
import { navLinks } from '../constants';


const WeddingButton = ({color, linkId, textButton}) => {
    return (
        <div className='app__button-box app__flex svg-wrapper' >
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" stroke={color} />
            </svg>
            <a href={navLinks.filter(x => x.id === linkId)[0].link} style={{color}}  >
                {textButton}
            </a>
        </div>
    )
}

export default WeddingButton;