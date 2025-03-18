import React from 'react';
import './Navbar.css';

function Navbar({ accountName, onLogout }) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="app-name">Fraudster</span>
            </div>
            <div className="navbar-right">
                <span className="account-name">{accountName}</span>
                <button className="logout-button" onClick={onLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;