import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    return (
        <nav>
            <ul>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">About Me</Link>
                </li>
                <li className={location.pathname === '/projects' ? 'active' : ''}> 
                    <Link to="/projects">Portfolio</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className={location.pathname === '/resume' ? 'active' : ''}>
                    <Link to ="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar 