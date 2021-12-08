import React, { Component } from 'react';
import '../App.css'
import Image from './logo.png'

export default class Head extends Component {
    render() {
    return (
        <div className="container-fluid bg-dark banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-6 texts">
                                <h1 className="text_name">Hi. My Name is Juan Manuel</h1>
                                <br />
                                <h2 className="text_name">Follow me on</h2>
                                <span className="word" onLoad={Animation}>instagram.com</span>
                                <span className="name">/juanmadidio07</span>
                            </div>
                            <div className="col-lg-6 image">
                                <img src={Image} title="Logo Juanma" alt="Logo Juanma"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
function Animation () {
  var words = ['instagram.com', 'facebook.com', 'github.com', 'linkedin.com'],
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
}