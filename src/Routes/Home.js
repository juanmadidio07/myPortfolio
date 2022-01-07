import React from 'react'

import { Head, Navbar, Footer } from '../components'
import { AboutMe, Works } from '../containers'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Head />
            <AboutMe />
            <Works />
            <Footer />
        </div>
    )
}

