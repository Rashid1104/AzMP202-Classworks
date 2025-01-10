import React from 'react';
import heroImg from '../img/hero-img.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css";

const HomePart2 = () => {
  return (
    <div className="hero-section position-relative text-white">
      <img
        className="img-fluid w-100"
        src={heroImg}
        alt="Shopping"
        style={{ 
          filter: 'brightness(50%)',
          maxHeight: '66vh', 
          objectFit: 'cover' 
        }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h2 className='h2-logo'>Get notified on each updates.</h2>
        <div className="d-flex justify-content-center">
          <input 
            type="text" 
            className="transparent-input" 
            placeholder="Enter Your Email Address"
          />
          <button className="btn">Subscribe</button>
        </div>
        <p className="p-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam <br /> doloremque ducimus tempora.
        </p>
      </div>
    </div>
  );
};

export default HomePart2;


