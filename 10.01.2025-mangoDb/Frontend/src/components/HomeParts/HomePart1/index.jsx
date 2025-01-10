import React from 'react';
import heroImg from '../img/hero-img.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css"

const HomePart1 = () => {
  return (
    <div className="hero-section position-relative text-white">
      <img
        className="img-fluid w-100"
        src={heroImg}
        alt="Shopping"
        style={{ 
          filter: 'brightness(50%)',
          maxHeight: '80vh', 
          objectFit: 'cover' 
        }}
      />
      <div className="position-absolute top-50 start-0 translate-middle-y text-left ps-5">
        <h1 className="logo-img">Shop With Us</h1>
        <p className="fs-5 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br />
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div>
          <button className="btn">Shop Now</button>
          <button className="btn">Club Membership</button>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;


