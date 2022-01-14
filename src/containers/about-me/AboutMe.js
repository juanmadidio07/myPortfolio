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
                <p>Read Some About Me</p>
            </div>
            <div className='portoflio__about-container'>
                <About title="My Languages" text="I first learnt HTML, CSS, PHP, MySQL and then I learnt JavaScript, ReactJs Library  and NodeJs. I also know FPDF, ChartJs and jQuery libraries." />
                <About title="My Hobbies" text="I like Programming WebSites as a hobbie and i spend time reading about some langugaes I am Intersted in. I also like Cyber Security and I try to Implement what i know in my site to make it safer" />
                <About title="lorem" text="lorem" />
            </div>
        </div>
    )
}
