import React, { Component } from 'react';
import '../App.css'

export default class About extends Component {
    render(){
    return (
        <div className="container-fluid about">
            <div className="container">
                <div className="row p-4">
                    <div>
                        <a name="about"><h1 className="projects-text text-center">My Projects</h1></a>
                        <br></br>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div>
                                            <div className="container-fluid py-2"><img src="../../distribuidora.png" title="distribuidora" alt="distribuidora" width="100%" /></div>
                                            <div className="container-fluid py-2 text-white">lorem ipsum</div>
                                            <div className="container-fluid py-2"><a className="btn btn-light" href="/distribuidora">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div>
                                            <a className="btn btn-light" href="/distribuidora">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div>
                                            <a className="btn btn-light" href="/distribuidora">Read More</a>
                                        </div>
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