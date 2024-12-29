import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import styles from "./index.module.scss";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
  const { id, title, description, price, image, category, rating, stock } = product;
  const [categories, setCategories] = useState([]);
  const [isLiked, setIsLiked] = useState(false); 
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const data = await controller.getAllData(endpoints.categories);
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleNavigate = () => {
    navigate(`/products/${id}`);
  };

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev); 
  };

  const categoryName = categories.find((c) => c.id === category)?.categoryName;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find(item => item.id === id);
  
    if (productInCart) {
      productInCart.quantity += 1;
      Swal.fire({
        icon: 'success',
        title: 'Product Updated!',
        text: `You have updated the quantity of ${productInCart.title}. Now you have ${productInCart.quantity} items in your cart.`,
      });
    } else {
      cart.push({ ...product, quantity: 1 });
      Swal.fire({
        icon: 'success',
        title: 'Product Added!',
        text: `${product.title} has been added to your cart.`,
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const productInFavorites = favorites.find(item => item.id === id);
  
    if (productInFavorites) {
      Swal.fire({
        icon: 'info',
        title: 'Already in Favorites!',
        text: `${productInFavorites.title} is already in your favorites.`,
      });
    } else {
      favorites.push(product);
      Swal.fire({
        icon: 'success',
        title: 'Product Added to Favorites!',
        text: `${product.title} has been added to your favorites.`,
      });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} onClick={handleNavigate}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.price}>Price: ${price}</p>
        <p className={styles.description}>
          {description.length > 50 ? `${description.slice(0, 50)}...` : description}
        </p>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating.rate ? styles.filledStar : styles.emptyStar}>
              {i < rating.rate ? "★" : "☆"}
            </span>
          ))}
          <span>{rating.rate} ({rating.count})</span>
        </div>
     
      </div>
      <div className={styles.footer}>
        <div>
          <FaInfoCircle className={styles.infoIcon} onClick={handleNavigate} />
        </div>
        <div onClick={handleHeartClick}>
          {isLiked ? (
            <FaHeart className={styles.heartIcon} />
          ) : (
            <FaHeartBroken className={styles.heartIcon} />
          )}
        </div>
      </div>   
      <button className={styles.button} onClick={addToFavorites}>
        Добавить в избранное
      </button>
    </div>
  );
};

export default ProductCard;



