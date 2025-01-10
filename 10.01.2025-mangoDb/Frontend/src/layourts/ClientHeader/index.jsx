import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  return (
    <header className="py-3 shadow-sm sticky-navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h1 className="logo">
              Selling<span className="span">.</span>
            </h1>
          </div>
          <div className="col-md-8">
            <nav>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/basket" className="nav-link">
                    Basket <sup>0</sup>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/favorite" className="nav-link">
                    Favorites <sup>0</sup>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

