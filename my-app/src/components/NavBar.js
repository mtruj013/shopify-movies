import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.scss'

const NavBar = () => {

    return (
        <div className="nav-container">
            <div className="title">
                <h3>THE SHOPPIES</h3>
            </div>
            <div className="nav-links">
                <NavLink className="home" to="/">
                    HOME
            </NavLink>

                <NavLink className="saved" to="/saved">
                    SAVED MOVIES
            </NavLink>
            </div>

        </div>
    )
}

export default NavBar;