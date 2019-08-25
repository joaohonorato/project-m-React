import React from 'react';
import { Link } from 'react-router-dom';
import SingInLinks from './SingInLinks';
import SignOutLinks from './SignOutLinks';

function Navbar() {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Project-M</Link>
                    <SingInLinks />
                    <SignOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
