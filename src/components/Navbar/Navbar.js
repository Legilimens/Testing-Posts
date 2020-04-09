import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">App</NavLink>
    <div>
      <ul className="navbar-nav">
        <NavLink
          to="/about"
          className="nav-item"
          activeClassName="active"
        >
          <span className="nav-link">About us</span>
        </NavLink>
      </ul>
    </div>
  </nav>
);

export default Navbar;
