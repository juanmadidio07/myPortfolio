import '../App.css'
import Image from './logo.png'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component{
    render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark nav_">
                <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Image} alt="Logo de la Pagina" title="juan manuel di dio" width="60px" height="60px" />
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><i className="fas fa-question-circle"></i> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><i className="far fa-address-book"></i> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
}