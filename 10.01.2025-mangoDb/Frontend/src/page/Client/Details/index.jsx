import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import controller from "../../../services/index";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const Navigate = useNavigate();

  const getProductDetails = async () => {
    try {
      const data = await controller.getDataById('products', id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }
const toNav = () =>{
  Navigate("/");
}
  return (
    <div className="product-details">
      <Helmet>
        <title>{product.title} - Product Details</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <p><strong>Rating: {product.rating}</strong></p>
            <p><strong>Reviews: {product.reviews}</strong></p>
            <button 
            onClick={toNav}
           className="btn-View"
            >Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
