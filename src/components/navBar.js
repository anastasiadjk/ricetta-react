import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Ricetta</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
}
export default NavBar;