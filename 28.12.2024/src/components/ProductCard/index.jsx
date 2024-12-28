import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import controller from "../../services";
import { endpoints } from "../../services/constants";

const ProductCard = ({ product }) => {
  const { id, title, description, price, image, category, rating } = product;
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${id}`);
  };

  const getCategories = async () => {
    try {
      const data = await controller.getALLData(endpoints.categories);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <div className="row">
           <div className="col-3" style={{ width: "18rem" }} onClick={handleNavigate}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        width="100%"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">
          {description.length > 50 ? description.slice(0, 50) + "..." : description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating.rate ? "text-warning" : "text-muted"}>
                {i < rating.rate ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-muted">{rating.rate} ({rating.count})</span>
        </div>
      </div>
    </div>
      </div>
      
    </div>
 
  );
};

export default ProductCard;

