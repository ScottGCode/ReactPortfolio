import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to ="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar 