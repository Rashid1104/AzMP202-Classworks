import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Basket = () => {
  // Состояние для хранения корзины
  const [basket, setBasket] = useState([]);

  // Загрузка корзины из localStorage при первом рендере
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  // Функция для обновления корзины в localStorage
  const updateBasketInLocalStorage = (newBasket) => {
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  // Увеличение количества товара
  const increaseItemQuantity = (id) => {
    const updatedBasket = basket.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateBasketInLocalStorage(updatedBasket);
  };

  // Уменьшение количества товара
  const decreaseItemQuantity = (id) => {
    const updatedBasket = basket.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateBasketInLocalStorage(updatedBasket);
  };

  // Удаление товара из корзины
  const removeItemFromBasket = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBasket = basket.filter(item => item.id !== id);
        updateBasketInLocalStorage(updatedBasket);
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      }
    });
  };

  // Вычисление общей стоимости
  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div id="basket">
      <div className="container">
        <div className="basket-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Count</th>
                <th>Increase</th>
                <th>Decrease</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description.slice(0, 50)}...</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <FaPlusCircle
                      style={{ cursor: 'pointer' }}
                      onClick={() => increaseItemQuantity(item.id)}
                    />
                  </td>
                  <td>
                    <FaMinusCircle
                      style={{ cursor: 'pointer' }}
                      onClick={() => decreaseItemQuantity(item.id)}
                    />
                  </td>
                  <td>
                    <FaTrashAlt
                      style={{ cursor: 'pointer', color: 'red' }}
                      onClick={() => removeItemFromBasket(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7" className="text-right"><strong>Total:</strong></td>
                <td><strong>${calculateTotalPrice()}</strong></td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Basket;


