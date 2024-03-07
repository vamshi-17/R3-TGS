import React, { useState } from 'react';
// import loginPic from '../../images/login_pic.jpg';

import loginPic from '../../../images/login_pic.jpg';


const Login = () => {
    // State variables to store user inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    // Update state when username input changes
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Update state when password input changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Update state when radio button selection changes
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        
        console.log('Submitted with', { username, password, selectedOption });
        // Add login logic here, like sending a request to a server
    };

    return (
        <section>
            <div className="container">
                <div className="row m-5">
                    <div className="border rounded-start">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="p-5 mx-md-4">
                                    <h3 className="pb-3 text-center fs-3">Login into your account</h3>
                                    <form onSubmit={handleSubmit}>
                                        {/* Radio button inputs */}
                                        <div className="row d-flex ps-3 pb-4 p-3">
                                            <div className="form-check col-md-auto">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault" 
                                                    id="flexRadioDefault1" 
                                                    value="R3 Index" 
                                                    checked={selectedOption === 'R3 Index'} 
                                                    onChange={handleOptionChange} 
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    R3 Index
                                                </label>
                                            </div>
                                            <div className="form-check col-md-auto">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="flexRadioDefault" 
                                                    id="flexRadioDefault2" 
                                                    value="EAI SOAP Note" 
                                                    checked={selectedOption === 'EAI SOAP Note'} 
                                                    onChange={handleOptionChange} 
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    EAI SOAP Note
                                                </label>
                                            </div>
                                        </div>

                                        {/* Username input */}
                                        <div className="input-group mb-3">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="floatingInputGroup1" 
                                                    placeholder="Username" 
                                                    value={username} 
                                                    onChange={handleUsernameChange} 
                                                />
                                                <label htmlFor="floatingInputGroup1">Username</label>
                                            </div>
                                            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                                        </div>

                                        {/* Password input */}
                                        <div className="input-group mb-3 pt-4 pb-4">
                                            <div className="form-floating">
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="floatingInputGroup2" 
                                                    placeholder="Password" 
                                                    value={password} 
                                                    onChange={handlePasswordChange} 
                                                />
                                                <label htmlFor="floatingInputGroup2">Password</label>
                                            </div>
                                            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                                        </div>

                                        {/* Remember Me checkbox and Forgot Password link */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="col-md-6 d-flex align-items-center">
                                                <input type="checkbox" className="form-check-input me-2" />
                                                <span className="fw-normal">Remember Me</span>
                                            </div>
                                            <div className="col-md-6 text-end">
                                                <a href="#" className="link-comment">Forgot Password?</a>
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <div className="pb-2">
                                            <button type="submit" className="btn btn-primary btn-lg w-100 font-weight-bold mt-4" onClick={handleSubmit}>Login</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            {/* Login image */}
                            <div className="col-md-6 d-none d-md-block">
                                <img src={loginPic} alt="Login" className="img-fluid-login rounded-end" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
