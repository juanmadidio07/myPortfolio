import React from 'react'
import About from '../../components/about/About'
import './aboutme.css'

export default function AboutMe() {
    return (
        <div className='portfolio__about section__margin' id='about'>
            <div className='portfolio__about-info'>
                <About title="Who Am I?" text="I am a Technical Programmer and a FullStack Web Developer focused in FrontEnd and BackEnd" />
            </div>
            <div className='portfolio__about-head'>
                <h1>This is The about Information</h1>
                <p>Read More About Me</p>
            </div>
            <div className='portoflio__about-container'>
                <About title="lorem" text="lorem" />
                <About title="lorem" text="lorem" />
                <About title="lorem" text="lorem" />
            </div>
        </div>
    )
}
