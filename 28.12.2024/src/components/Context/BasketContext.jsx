import React, { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]); 


  const addToBasket = (product) => {
    setBasket((prevBasket) => {

      const existingProduct = prevBasket.find((item) => item.id === product.id);
      if (existingProduct) {
      
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};
