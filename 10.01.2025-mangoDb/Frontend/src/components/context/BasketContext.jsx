import React, { createContext, useState, useEffect } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const addToBasket = (product) => {
    const updatedBasket = [...basket];
    const productIndex = updatedBasket.findIndex(item => item.id === product.id);
    
    if (productIndex >= 0) {
      updatedBasket[productIndex].quantity += 1;
    } else {
      updatedBasket.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const increaseQuantity = (id) => {
    const updatedBasket = basket.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const decreaseQuantity = (id) => {
    const updatedBasket = basket.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };
