import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-link" to="/">Home </NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/About">About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </ul>
            </div>
        </nav>
    )
}
