import React from 'react';
import Slider from 'C:/Users/91978/Desktop/Study Materials/Practices/cilent/src/Responsive Website Design/inc/Slider.js';
import { Link } from "react-router-dom"
import Vmc from './inc/Vmc';
import Services from './inc/Services';

const Home = () => {
    return (
        <>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision, Mission and Value  */}
            <Vmc />

            {/* Our Services */}
            <Services />
           
        </>
    );
};

export default Home;