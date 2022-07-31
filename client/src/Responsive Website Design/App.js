import React from 'react';
import './App.css'
import Aboutus from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import { Switch, Route } from "react-router-dom"
import NavBar from './inc/NavBar';
import Footer from './inc/Footer';

const App = () => {
    return (
        <>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/aboutUs" component={Aboutus} />
                    <Route path="/contactUs" component={Contact} />
                </Switch>

                <Footer />
        </>
    );
};

export default App;