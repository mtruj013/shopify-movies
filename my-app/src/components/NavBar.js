import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="nav-container">
            <NavLink className="home" to="/">
                Home
            </NavLink>

            <NavLink className="saved" to="/saved">
                Saved Movies
            </NavLink>

        </div>
    )
}

export default NavBar;