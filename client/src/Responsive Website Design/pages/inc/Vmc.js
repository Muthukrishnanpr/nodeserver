import React from 'react';
import { Link } from "react-router-dom"

const Vmc = () => {
    return (
        <>
         <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <h3 className="main-heading">Vision, Mission and Values</h3>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Vision</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Mission</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Core Values</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vmc;