import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <div className="nav-logo">
                <Link to="/">Doostan</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/features">Features</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
            <div className="nav-search">
                <input type="text" placeholder="Search..." />
                <button>🔍</button>
            </div>
        </nav>
    );
};

export default NavigationBar;
