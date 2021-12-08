import React, { Component } from "react";
import Head from './Head';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import '../App.css'
import Navbar from "./Navbar";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Head />
                <About />
                <Contact />
                <Footer />
            </div>
        )
    }
}