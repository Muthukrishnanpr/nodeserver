import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container-fluid mx-5 px-5">
                    <Link to="/" className="navbar-brand py-0">
                        <img src={logo} style={{ width: "60px" }} className="rounded-circle opacity-50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light fs-5 fw-lighter fst-italic" >Home</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/aboutus" className="nav-link text-light fs-5 fw-lighter fst-italic" >About Us</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/contactus" className="nav-link text-light fs-5 fw-lighter fst-italic" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;