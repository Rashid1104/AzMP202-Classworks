import React, { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const updateFavorites = (product) => {
    const updatedFavorites = [...favorites];
    const existingProductIndex = updatedFavorites.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      updatedFavorites.splice(existingProductIndex, 1);
    } else {
      updatedFavorites.push(product); 
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
