import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import controller from "../../services/index"; 
import { endpoints } from "../../services/constants"; 

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    try {
      const data = await controller.getALLData(`${endpoints.products}/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails(); 
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <div>
        <strong>Rating:</strong>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < product.rating.rate ? "text-warning" : "text-muted"}>
            {i < product.rating.rate ? "★" : "☆"}
          </span>
        ))}
        <span className="text-muted"> {product.rating.rate} ({product.rating.count})</span>
      </div>
    </div>
  );
};

export default ProductDetails;
