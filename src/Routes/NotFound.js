import React from 'react';

import { Footer2 } from "../components";
import Navbar2 from "../components/navbar2/Navbar2";
import './style.css'

export default function NotFound() {
    return (
        <div>
            <Navbar2 />
            <div className='portfolio__notfound'>
                <div className='portfolio__notfound_container'>
                    <h1>404 Page not Found. Check Your URL</h1>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}
