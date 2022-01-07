import React from 'react'

import Projects from '../../components/projects/Projects';
import './works.css'

const worksData = [
    {
        title: "Distribuidora",
        text: "This is a system made for a beach articles provider"
    },
    {
        title: "Distribuidora",
        text: "This is a system made for a beach articles provider"
    },
    {
        title: "Distribuidora",
        text: "This is a system made for a beach articles provider"
    },
    {
        title: "Distribuidora",
        text: "This is a system made for a beach articles provider"
    },
]

const Works = () => {
    return (
        <div className='portfolio__works section__padding' id="projects">
            <div className='portfolio__works-heading'>  
                <h1 className='gradient__text'>These are my Projects</h1>
                <p>Take a look on them</p>
            </div> 
            <div className='portfolio__works-container'>
                {worksData.map((item, index) =>(
                    <Projects title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Works; 