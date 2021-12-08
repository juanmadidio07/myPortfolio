import React, { Component } from "react";
import '../App.css'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'
export default class Distribuidora extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Contact />
                <Footer />
            </div>
        )
    }
}