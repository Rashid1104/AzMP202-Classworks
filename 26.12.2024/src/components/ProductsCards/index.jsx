import { FaInfoCircle } from "react-icons/fa";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import controller from "../services";
import { endpoints } from "../services/constants";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    image: thumbnail,
    category,
    stock,
    rating,
    tags = [], 
  } = product;

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleGetDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const getCategories = async () => {
    try {
      const data = await controller.getAllData(endpoints.category);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    const categoryData = categories.find((cat) => cat.id === categoryId);
    return categoryData ? categoryData.category : "Uncategorized";
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={thumbnail} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceRating}>
          <span className={styles.price}>${price}</span>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={styles.star}>
                {i < rating.rate ? "★" : "☆"}
              </span>
            ))}
            <span className={styles.ratingCount}>({rating.count})</span>
          </div>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.category}>{getCategoryName(category)}</span>
        <FaInfoCircle
          onClick={() => handleGetDetails(id)}
          className={styles.infoIcon}
        />
        <span className={styles.stock}>
          {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
        </span>
      </div>
      <button className={styles.button} disabled={stock === 0}>
        {stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ProductCard;
