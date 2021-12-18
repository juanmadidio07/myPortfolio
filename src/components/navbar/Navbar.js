import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg'
import logo2 from '../../logo2.svg'
import './navbar.css'

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
                    <p><a href='#about'>About</a></p>
                    <p><a href='#projects'>Projects</a></p>
                    <p><a href='#contact'>Contact</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='portfolio__navbar'>
            <div className='portfolio__navbar-links'>
                <div className='portfolio__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                    <img src={logo2} alt="logo" id='logo2' />
                </div>
                <div className='portfolio__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='portfolio__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='portfolio__navbar-menu_container scale-up-center'>
                        <div className='portfolio__navbar-menu_container-links'>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;