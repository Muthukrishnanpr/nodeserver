// import React, { useEffect } from 'react';
import {  } from "react"
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Posts from './Posts/Posts';
import Form from './Form/Form';

import { useDispatch } from "react-redux"

import { getPosts } from '../actions/posts'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <nav class="navbar">
                        <div></div>
                        <a class="navbar-brand" href="#">Aadhithya</a>
                        <div className="">
                            <button type="button" className="btn btn-primary px-1 py-0 pb-1">Logout</button>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <Posts />
                        </div>
                        <div className="col-4">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;