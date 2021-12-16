import React, { Component } from 'react'
import Footer from './Footer'
import '../App.css'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark">
                    <div className="container error404 bg-dark text-white text-center">
                        <h1>404 Not Found. Please go to Home Page, Thanks :)</h1>
                    </div>
                </div>
                <Footer />
            </div>
            
        )
    }
}
