import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className='header'>
        <h1>Admin Page</h1>
        <nav>
            <ul>
                <li>
                  
                    <NavLink to={"/admin"}>Dashboard</NavLink>
                </li>
                <li>

                    <NavLink to={"/admin/products"}>Products</NavLink>
                </li>
                <li>
                 
                    <NavLink to={"/admin/products/add"}>Add Product</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default AdminHeader;
