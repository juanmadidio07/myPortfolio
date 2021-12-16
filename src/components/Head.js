import React, { Component } from 'react';
import '../App.css'

export default class Head extends Component {
    render() {
    return (
        <div className="container-fluid bg-dark banner" onLoad={Animation}>
            <div className="container banner_2">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-6 texts">
                              <div className="container portfolio">
                                <h1 className="text_name1">My Personal WEB</h1>
                              </div>
                                <br />
                                <div className="container">
                                  <span className="word">instagram.com</span>
                                  <span className="name">/juanmadidio07</span>
                                </div>
                                <br />
                                <div className="container">
                                  <p className="text_personal">This is My Personal Portfolio Where you can Find all my Projects and Get in Touch with Me if You are Interested on my Services. Thank You for Visiting!</p>
                                </div>
                            </div>
                            <div className="col-lg-6 image">
                              <div className="container d-flex">
                                <img src={process.env.PUBLIC_URL + '/img/yo.png'} title="Logo Juanma" alt="Logo Juanma" width="100%" height="100%"></img>
                              </div>
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
}