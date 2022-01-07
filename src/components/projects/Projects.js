import React from 'react'
import { Link } from 'react-router-dom'

import './projects.css'

export default function Projects({title, text}) {
    return (
        <div className='portfolio__about-container__about'>
            <div className='portfolio__about-container__about-title'>
            <div />
                <Link to="/Distribuidora"><h1>{title}</h1></Link>
            </div>
            <div className='portfolio__about-container_about-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}
