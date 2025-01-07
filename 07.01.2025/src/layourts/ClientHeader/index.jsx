import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  return (
    <header className="py-3 shadow-sm sticky-navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <nav>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Addproduct" className="nav-link">
                    Add product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/basket" className="nav-link">
                    Basket 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/favorite" className="nav-link">
                    Favorites
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

