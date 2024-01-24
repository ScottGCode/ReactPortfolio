import React from 'react'
import Navbar from './Navigation'

function Header() {
    return (
        <div className='header-navbar-container'>
        <header>
            <h1>Rutherford</h1>
        </header>
        <div>
            <Navbar />
        </div>
        </div>
    );
}
export default Header 