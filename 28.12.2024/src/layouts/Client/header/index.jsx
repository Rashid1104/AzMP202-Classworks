import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom';


const ClientHeader = () => {
  return (
    <header className='header'>
        <h1>Client Page</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink  to={"/contacts"}>Contacts</NavLink>
                </li>
                <li>
                    <NavLink  to={"/products"}>Products</NavLink>
                </li>
                <li>
                    <NavLink  to={"/favorites"}>Favorites <sup>0</sup></NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default ClientHeader