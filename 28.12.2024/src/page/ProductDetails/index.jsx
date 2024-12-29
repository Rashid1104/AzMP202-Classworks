import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import styles from "./index.module.scss";
import ImageGallery from "../../components/ImageGallery";
import { Star } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const nav = useNavigate();

  const getProduct = async () => {
    try {
      const data = await controller.getDataById(endpoints.products, id);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  const handleGoBack = () => {
    nav(-1);
  };

  return (
    <>
      <Helmet> 
        <title>{product ? `${product.title} - Product Details` : "Product Details"}</title> 
        <meta name="description" content={product ? product.description : "Product details page"} />
      </Helmet>

      <div>
        {product && (
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <ImageGallery
                images={product.images}
                thumbnail={product.image}
              />
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p className={styles.productBrand}>By {product.brand}</p>
              <div className={styles.productRating}>
                <Star className={styles.starIcon} />
                <span>{product.rating.rate}</span>
                <span>({product.rating.count} reviews)</span>
              </div>
              <p className={styles.productPrice}>${product.price}</p>
              <p className={styles.productDescription}>
                {product.description}
              </p>
              <div className={styles.productActions}>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className={styles.quantityInput}
                />
                <button
                  onClick={handleAddToCart}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
              </div>
              <p className={styles.stockInfo}>
                In Stock: {product.stock} units
              </p>
              {product.tags && product.tags.length > 0 && (
                <div className={styles.productTags}>
                  {product.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={handleGoBack}
                className={styles.goBackBtn}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;