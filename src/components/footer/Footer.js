import React from 'react'

import './footer.css'
import logo from '../../assets/logo.png'
export default function Footer() {
    return (
        <div className='portfolio__footer section__padding' id='contact'>
            <div className='portfolio__footer-heading'>
                <h1 className='gradient__text'>You can Follow and Contact me on my Social Media</h1>
            </div>
            <div className='portfolio__footer-links'>
                <div className='portfolio__footer-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='portfolio__footer-links_div'>
                    <h4>Links</h4>
                    <p><a href='https://www.facebook.com/juanmadidio07/' target='_blank' rel="noopener noreferrer">Facebook</a></p>
                    <p><a href='https://www.github.com/juanmadidio07/' target='_blank' rel="noopener noreferrer">Github</a></p>
                    <p><a href='https://www.instagram.com/juanmadidio07/' target='_blank' rel="noopener noreferrer">Instagram</a></p>
                    <p><a href='https://www.linkedin.com/in/juanmadidio07/' target='_blank' rel="noopener noreferrer">Linkedin</a></p>
                    <p><a href='https://wa.me/+542252448497/' target='_blank' rel="noopener noreferrer">WhatsApp</a></p>
                </div>
                <div className='portfolio__footer-links_div'>
                    <h4>Get in Touch</h4>
                    <p>+54 2252 44-8497</p>
                    <p>blue12juanma@gmail.com</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className='portfolio__footer-copyright'>
                <p>© 2021 Juan Manuel Di Dio. All rights Reserved.</p>
            </div>
        </div>
    )
}
