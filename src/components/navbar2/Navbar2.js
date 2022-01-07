import React from 'react';
import { Link } from "react-router-dom";

import './navbar2.css'
import logo from '../../logo.svg'


export default function Navbar2() {
    return (
        <div className='portfolio__navbar'>
            <div className='portfolio__navbar-links'>
                <div className='portfolio__navbar-links_logo'>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
            </div>
        </div>
    )
}
