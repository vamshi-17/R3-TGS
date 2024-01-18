import React from 'react';
import logo from "../../../images/Logo.svg" // Adjust the path to your logo image

const Header = () => {
    // Function to handle logout - you'll need to implement the logic
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <header>
            <div className="container-fluid shadow">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="col-md-6 d-flex align-items-center px-4 mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={logo} className="py-1" alt="Logo" />
                    </a>

                    <div className="col-md-6 d-flex text-end justify-content-end">
                        <div className="py-2 pe-3 text-dark text-decoration-none"> 
                            <i className="bi bi-person-fill"></i> Welcome <strong>to Maurice Reeves</strong>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
