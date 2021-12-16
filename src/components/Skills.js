import React, { Component } from 'react'
import '../App.css'
export default class Skills extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="container">
                    <div className="container p-4">
                        <h1 className="projects-text text-center">Skills</h1>
                    </div>
                    <div className="col">
                        <div className="row p-4" id="skills">
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img ">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="container">
                                            <img src={process.env.PUBLIC_URL + '/img/js.png'} alt="JavaScript" title="JavaScript" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/html.jfif'} alt="Html" title="Html" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="React" title="React" />   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/node.png'} alt="Node Js" title="Node Js" />
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="container">
                                            <img src={process.env.PUBLIC_URL + '/img/php.png'} alt="PHP" title="PHP" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/css.jfif'} alt="CSS" title="CSS" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/bootstrap.png'} alt="Bootstrap" title="Bootstrap" />   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 py-2 d-flex">
                                <div className="container d-flex skill_img">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container">
                                                <img src={process.env.PUBLIC_URL + '/img/mysql.png'} alt="MySQL" title="MySQL" />
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
