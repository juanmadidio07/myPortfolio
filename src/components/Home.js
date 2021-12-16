import React, { Component } from "react";
import Head from './Head';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import '../App.css'
import Skills from "./Skills";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Head />
                <About />
                <Skills />
                <Contact />
                <Footer />
            </div>
        )
    }
}