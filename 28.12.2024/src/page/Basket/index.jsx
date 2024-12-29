import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";
import "./index.css"; 

const Basket = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleIncrease = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleClearItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoveItem(id);
        Swal.fire("Removed!", "The product has been removed from your cart.", "success");
      }
    });
  };
  const ClearAllItems = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove all items?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove all!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("cart"); 
        setCart([]);
        Swal.fire("Cleared!", "All items have been removed from your cart.", "success");
      }
    });
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={ClearAllItems}>Clear all busket</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Plus</th>
            <th>Count</th>
            <th>Minus</th>
            <th>Clear</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn-plus" onClick={() => handleIncrease(item.id)}>+</button>
              </td>
              <td>{item.quantity}</td>
              <td>
                <button className="btn-minus" onClick={() => handleDecrease(item.id)}>-</button>
              </td>
              <td>
                <button className="btn-clear" onClick={() => handleClearItem(item.id)}>Clear</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;

