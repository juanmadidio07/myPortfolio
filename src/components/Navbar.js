import '../App.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component{
    render(){
    return (
        <div className="position-sticky top-0 navigation">
            <nav className="navbar navbar-expand-lg navbar-dark nav_">
                <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="Logo de la Pagina" title="juan manuel di dio" width="50px" height="50px" />
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
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-question-circle"></i>About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="far fa-address-book"></i>Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
}