import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Reg.css'

const Registration = () => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [file, setFile] = useState()
    const [isError, setIsError] = useState()
 
    const history = useHistory()

    const checkPassward = (e) => {
        setConfirmPassword(e.target.value)
        if(password !== confirmPassword){
            setIsError( "Confirm Password should be match with Password***" )
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
            file : file
        }
       /* if(firstname && lastname && email && password && password === confirmPassword){
            alert("User Registered Successfully")
            axios
            .post("http://localhost:8080/aadhithya/register", data)
            .then(res => {
                console.log(res.data.message)
                // history.push('/login')
            })
        }
        else{
            alert("Invaild data")
        }*/
        console.log(data)
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center container reg">
                <div className="border bg-info border-primary px-3 py-5 rounded-3">
                    <div>
                        <h5 className="text-center text-uppercase" style={{ fontWeight: 600, letterSpacing: "1px" }}>Registration</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <label className="form-label mt-3" htmlFor="fname">First Name</label>
                                    <input type="text" className="form-control" id="fname" name="firstName" placeholder="Enter your First Name"
                                        onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <label className="form-label mt-3" htmlFor="lname">First Name</label>
                                    <input type="text" className="form-control" id="lname" name="lastName" placeholder="Enter your Last Name"
                                        onChange={(e) => setLastname(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <label className="form-label mt-3" htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="emal" placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="form-label mt-3" htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label className="form-label mt-3" htmlFor="confirmpassword">Confirm Password</label>
                                <input type="text" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Enter your Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value) /*checkPassward(e)*/} />
                                    <p className="text-danger pt-2 position-absolute" style={{fontSize : "12px", fontWeight : 700}}>{isError}</p>
                            </div>
                            <div className="">
                                <label htmlFor="file" className="mt-3">Choose</label>
                                <input type="file" name="file" className="d-none" id="file" onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <button type="submit" className="w-50 py-1 btn btn-primary">Create Account</button>
                        </div>
                        <div className="text-success text-center pt-3">
                            <Link to="login">Already have an Account ?</Link>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Registration;