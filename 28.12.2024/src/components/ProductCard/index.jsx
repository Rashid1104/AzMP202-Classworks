import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import styles from "./index.module.scss";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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

  useEffect(() => {
    getCategories();
  }, []);

  const categoryName = categories.find((c) => c.id === category)?.categoryName;

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
        <span className={styles.category}>{categoryName || "No Category"}</span>
      </div>
      <div className={styles.footer}>
        <div>
            <FaInfoCircle className={styles.infoIcon} onClick={handleNavigate} />
        </div> 
        <div>
          {isLiked ? (
            <FaHeart className={styles.heartIcon} onClick={handleHeartClick} />
          ) : (
            <FaHeartBroken className={styles.heartIcon} onClick={handleHeartClick} />
          )}
        </div>     
      </div>
     
    </div>
  );
};

export default ProductCard;

