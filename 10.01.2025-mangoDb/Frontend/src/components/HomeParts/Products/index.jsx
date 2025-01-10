import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { endpoints } from "../../../services/constants";
import controller from "../../../services/index";
import { useFavorites } from "../../context/FavContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { favorites, updateFavorites } = useFavorites();
  const [basket, setBasket] = useState([]);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const getProducts = async () => {
    try {
      const data = await controller.getAllData(endpoints.products);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
    getProducts();
  }, []);

  const updateBasketInLocalStorage = (newBasket) => {
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  const handleAddToCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to add ${product.title} to your cart?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add to cart",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBasket = [...basket];
        const existingProductIndex = updatedBasket.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex >= 0) {
          updatedBasket[existingProductIndex].quantity += 1;
        } else {
          updatedBasket.push({ ...product, quantity: 1 });
        }

        updateBasketInLocalStorage(updatedBasket);

        Swal.fire(
          "Added to Cart!",
          `${product.title} has been added to your cart.`,
          "success"
        );
      }
    });
  };

  return (
    <div className="products py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="Popular-Products">Popular Products</span>
          <h1 className="Our-Products">Our Products</h1>
        </div>

        <div className="row">
          {products.length > 0 ? (
            products.map((product) => {
              const { id, title, description, price, image, rating, reviews } = product;
              return (
                <div className="col-md-4 col-sm-6 col-12 mb-4" key={id}>
                  <div className="product-card text-center position-relative">
                    <div className="image-container">
                      <img
                        src={image}
                        alt={title}
                        className="product-image img-fluid"
                      />
                      <div className="hover-square"></div>
                    </div>
                    <h3 className="h3-text">{title}</h3>
                    <div className="rating mb-2">
                      <span>
                        <FaStar className="star" /> {rating}
                      </span>
                      <span>
                        <FaHeart
                          className={favorites.some((fav) => fav.id === product.id) ? "heart-red" : "heart"}
                          onClick={() => updateFavorites(product)}
                        />
                        {reviews}
                      </span>
                    </div>
                    <p className="p-decs">{description}</p>
                    <div className="product-actions">
                      <button
                        className="btn-Cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        Cart
                      </button>
                      <button 
                        className="btn-View" 
                        onClick={() => handleViewDetails(id)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <p>Loading products...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;




