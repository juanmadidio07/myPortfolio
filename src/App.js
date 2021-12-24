import React from 'react'

import './App.css'

import { Head, Navbar, Footer } from './components'
import { AboutMe, Works } from './containers'

function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Head />
            </div>
            <AboutMe />
            <Works />
            <Footer />
        </div>
    )
}

export default App;