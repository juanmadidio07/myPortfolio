import React from 'react'
import './about.css'

export default function About({title, text}) {
    return (
        <div className='portfolio__about-container__about'>
            <div className='portfolio__about-container__about-title'>
            <div />
                <h1>{title}</h1>
            </div>
            <div className='portfolio__about-container_about-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}
