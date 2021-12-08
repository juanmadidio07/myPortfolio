import React, { Component } from 'react';
import '../App.css'

export default class Contact extends Component{
    render(){
    return (
        <div className="container-fluid bg-dark contact text-center">
            <div className="container">
                <div className="col-lg-4">
                    <p>This is My Personal Portfolio Where you can Find all my Projects and Get in Touch with Me if You are Interested on my Services. Thank You for Visiting!</p>
                </div>
                <div className="col-lg-4">
                    <a className="link-secondary" name="contact" href="https://www.instagram.com/juanmadidio07/"><i className="fab fa-instagram"></i></a>
                    <a className="link-secondary" href="https://www.github.com/juanmadidio07/"><i className="fab fa-github"></i></a>
                    <a className="link-secondary" href="https://www.linkedin.com/in/juanmadidio07/"><i className="fab fa-linkedin"></i></a>
                    <a className="link-secondary" href="https://www.facebook.com/juanmadidio/"><i className="fab fa-facebook"></i></a>
                </div>
                <div className="col-lg-4 d-inline-block"><p>Email: <b>blue12juanma@gmail.com</b></p>
                    <p>WhatsApp: <b><a href="https://wa.me/+5492252448497" className="link-secondary wsp">+54 2252-44-8497</a></b></p></div>
            </div>
        </div>
    )
}
}