import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const ClientHeader = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0); 
  useEffect(() => {
    const storedFavoriteCount = localStorage.getItem('favoriteCount');
    if (storedFavoriteCount) {
      setFavoriteCount(parseInt(storedFavoriteCount));
    }

    const storedBasketCount = localStorage.getItem('basketCount');
    if (storedBasketCount) {
      setBasketCount(parseInt(storedBasketCount));
    }
  }, []);


  const updateBasketCount = (newCount) => {
    setBasketCount(newCount);
    localStorage.setItem('basketCount', newCount); 
  };

  return (
    <header className="header">
      <h1>Client Page</h1>
      <nav>
        <ul className="ul">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              Favorites <sup>{favoriteCount}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/basket"}>
              Basket <sup>{basketCount}</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ClientHeader;

