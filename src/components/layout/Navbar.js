import React from 'react';
import { Link } from 'react-router-dom';
import SingInLinks from './SingInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'
function Navbar(props) {
    const { auth, profile } = props
    const links = auth.uid ? <SingInLinks profile={profile} /> : <SignOutLinks />
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Project-M</Link>
                    {auth.isLoaded && links}
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
