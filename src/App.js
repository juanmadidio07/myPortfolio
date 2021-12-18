import React from 'react'

import './App.css'

import { Head, Navbar } from './components'
import { AboutMe } from './containers'

function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Head />
            </div>
            <AboutMe />
        </div>
    )
}

export default App;