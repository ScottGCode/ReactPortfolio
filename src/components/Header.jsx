// Header component with Navbar component inlcuded 
import React from 'react'
import Navbar from './Navigation'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header-container'>
        <header>
            <h1>
            <Link to="/">
                Scott Rutherford
            </Link>
            </h1>
            <nav>
                <Navbar />
            </nav>
        </header>
        </div>
    );
}
export default Header 