import React from "react";

import logo from '../../../images/login-logo.png'

// import logo from '../../images/login-logo.png';


const Header = () => {

    return (
        <div className="container-fluid shadow">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="col-md-6 d-flex align-items-center px-4 mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src={logo} className="py-1" alt="Logo" />
            </a>
            </div>
        </div>
    )
}

export default Header;