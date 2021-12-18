import React, { useEffect } from 'react'

import './head.css'
import logo from '../../assets/logo.png'


function Head() {

    useEffect(() => {
        var words = ['instagram.com', 'facebook.com', 'github.com', 'linkedin.com/in'],
          wordWrapper = document.querySelector('.word'),
          wordWrapperContent = wordWrapper.innerHTML,
          addingWord = false,
          counter = 1;
      
        setInterval(function(){
      
        if(wordWrapperContent.length > 0 && !addingWord ) {
          wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
          wordWrapperContent = wordWrapper.innerHTML;
        } else {
          addingWord = true;
        }
      
        if( addingWord ){
          if( wordWrapperContent.length < words[counter].length  ) {
            wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
            wordWrapperContent = wordWrapper.innerHTML;
          } else {
            if( counter < words.length) {
              counter ++
            }
            addingWord = false;
          }
        }
      
        if( counter === words.length) {
          counter = 0;
        }
      
      }, 150);
    });

    return (
        <div className='portfolio__header section__padding' id='home'>
            <div className='portfolio__header-content'>
                <h1 className='gradient__text' onLoad={Animation}>Hi, I'm Juan D. FullStack Web Developer</h1>
                <div className='portfolio__header-content_social'>
                <span className="word">instagram.com</span>
                <span className="name">/juanmadidio07</span>
                </div>
                <div className='portfolio__header-content-about'>
                    <p>This is My Personal Portfolio Where you can Find all my Projects and Get in Touch with Me if You are Interested on my Services. Thank You for Visiting!</p>
                </div>
            </div>
                <div className='portfolio__header-image'>
                    <img src={logo} alt="logo" />
                </div>
        </div>
    )
}

export default Head