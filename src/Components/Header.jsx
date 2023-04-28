import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return(
        <>
            <header>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <NavLink className="navbar-option1" to="/">EDUCATION</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/course">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-option" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <button className="header-btn">Join us</button>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    )
}


export default Header;