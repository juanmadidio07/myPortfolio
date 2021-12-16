import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default class About extends Component {
    render(){
    return (
        <div className="container-fluid about">
            <div className="container">
                <div className="row p-4">
                    <div className="container-fluid" id="about">
                        <h1 className="projects-text text-center">Projects</h1>
                        <br></br>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-4 py-2">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div>
                                            <div className="container-fluid py-2 text-white"><h4>Stock Control</h4></div>
                                            <div className="container-fluid py-2"><img src="../../distribuidora.png" title="distribuidora" alt="distribuidora" width="100%" /></div>
                                            <div className="container-fluid py-2 text-white"><p>This system was made for a Provider</p></div>
                                            <div className="container-fluid py-2"><Link className="btn btn-light" to="/Distribuidora">Read More</Link></div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-2">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div className="container-fluid py-2">                                    
                                            <Link className="btn btn-light" to="Distribuidora">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-2">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                    <div className="container-fluid py-2"><Link className="btn btn-light" to="/distribuidora">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}