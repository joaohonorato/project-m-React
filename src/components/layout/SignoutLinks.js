import React from 'react'
import { NavLink } from 'react-router-dom';

function SignOutLinks() {
    return (
        <ul className='right'>
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>Register</NavLink></li>
        </ul>
    )
}

export default SignOutLinks
