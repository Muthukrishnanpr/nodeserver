import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6 className="fw-bold">Company Information</h6>
                            <hr />
                            <p className="text-white text-capitalize fst-italic">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it 
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-bold">Quick Links</h6>
                            <hr />
                            <div><Link to="/" className="text-decoration-none text-white fst-italic" >Home</Link></div>
                            <div><Link to="/aboutus" className="text-decoration-none text-white fst-italic" >About Us</Link></div>
                            <div><Link to="/contactus" className="text-decoration-none text-white fst-italic" >Contact Us</Link></div>
                            <div><Link to="/" className="text-decoration-none text-white fst-italic" >Blog</Link></div>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-bold">Call Information</h6>
                            <hr />
                            <div><address className="text-white mb-1 fst-italic">#64, Bangalore Karnataka India.</address></div>
                            <div><a className="text-white mb-1 text-decoration-none fst-italic" href="tel:+91 9786337914">+91 *******894</a></div>
                            <div><a className="text-white mb-1 text-decoration-none fst-italic" href="tel:+91 9943684894">+91 *******714</a></div>
                            <div><a className="text-white mb-1 text-decoration-none fst-italic" href="mailto:+email@admin.co.in">email@admin.co.in</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;