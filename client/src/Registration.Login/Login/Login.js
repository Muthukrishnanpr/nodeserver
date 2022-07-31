import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoginUser }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        axios
            .post("http://localhost:8080/aadhithya/login", data)
            .then(res => {
                alert("You are Logged in Successfully")
                setLoginUser(res.data.data)
                // history.push('/')
                // window.location.href = ("Home.js")
            })
        console.log(data)
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center container login round">
                <div className="border bg-info border-primary px-3 py-4 rounded-3">
                    <div>
                        <h5 className="text-center text-uppercase" style={{ fontWeight: 600, letterSpacing: "1px" }}>Login</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div>
                                <label className="form-label mt-2" htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="emal" placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="form-label mt-3" htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="w-50 py-1 btn btn-primary">Login</button>
                        </div>
                        <div className="text-success text-center pt-3">
                            <Link to="registration">Create New Account</Link>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Login;