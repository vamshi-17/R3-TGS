import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
    return (
        <div className="bg-navbar">
            <button type="button" data-bs-toggle="collapse" data-bs-target="#bottomNavbar" className="btn bg-navbar text-white w-100 d-lg-none d-md-none d-sm-block d-xs-block rounded-0 p-2">
                <i className="bi bi-list me-2"></i> Menu
            </button>
            <div className="collapse navbar-collapse px-2" id="bottomNavbar">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center" id="removeFlex">
                        <div>
                            <Link to="/r3index" className="d-inline-block customNav">R3 Index</Link>
                            <Link to="/search" className="active d-inline-block customNav">Search</Link>
                            {/* We can add other navigation links here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
