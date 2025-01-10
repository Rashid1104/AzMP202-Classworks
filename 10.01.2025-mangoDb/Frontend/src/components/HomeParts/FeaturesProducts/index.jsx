import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css"
const FeaturesProducts = () => {
  return (
    <div className="products py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="Popular-Products">Awesome Products</span>
          <h1 className="Our-Products">Featured Products</h1>
          <p className="Our-Products-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
          </p>
        </div>

        <div className="row row-cols">
        <div className="row cols">
            <div className="col-6">
              <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp" alt="" />
            </div>
            <div className="col-6">
              <h2 className='h2-About'>About This Product</h2>
              <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

              <div className='price-div'>
                <h3>Price:</h3>
              <span className='price'> <del>$269.00</del> $69.00</span> 
              </div>
              <div className="product-actions-features">
                      <button
                        className="btn-Cart"
                      >
                        Add to Cart
                      </button>
                      <button className="btn-View">View Details</button>
                    </div>              
            </div>
          </div>
          <div className="row cols">
          <div className="col-6">
              <h2 className='h2-About'>About This Product</h2>
              <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

              <div className='price-div'>
                <h3>Price:</h3>
              <span className='price'> <del>$269.00</del> $69.00</span> 
              </div>
              <div className="product-actions-features">
                      <button
                        className="btn-Cart"
                      >
                        Add to Cart
                      </button>
                      <button className="btn-View">View Details</button>
                    </div>              
            </div>
            <div className="col-6">
              <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProducts;

