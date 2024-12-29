import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); 

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const existingProduct = prevFavorites.find((item) => item.id === product.id);
      if (existingProduct) {
       
        return prevFavorites;
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
