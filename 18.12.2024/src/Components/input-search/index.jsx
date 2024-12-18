import React from 'react'
import { useState } from 'react';
import "../services/index"

const Search = ({ recipes, setRecipes }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const getRecipes = async () => {
        const data = await controller.getAllData(endpoints.recipes);
        setRecipes(data);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.trim());
    };
    return (
        <input
            type="text"
            id="search"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
        />
    )
}

export default Search