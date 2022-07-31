import React from 'react';
import Service1 from '../../images/service1.jpg'
import { Link } from "react-router-dom"

const Services = () => {
    return (
        <>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <h3 className="main-heading">Our Services</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow text-center">
                                <img src={Service1} className="card-img-top" alt="services" />
                                <div className="card-body border-top mt-4">
                                    <h6 className="service-heading fw-bold text-secondary pb-2">Service 1</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className="btn btn-outline-info shadow py-0 px-1 mb-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow text-center">
                                <img src={Service1} className="card-img-top" alt="services" />
                                <div className="card-body border-top mt-4">
                                    <h6 className="service-heading fw-bold text-secondary pb-2">Service 2</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className="btn btn-outline-info shadow py-0 px-1 mb-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow text-center">
                                <img src={Service1} className="card-img-top" alt="services" />
                                <div className="card-body border-top mt-4">
                                    <h6 className="service-heading fw-bold text-secondary pb-2">Service 3</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className="btn btn-outline-info shadow py-0 px-1 mb-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;