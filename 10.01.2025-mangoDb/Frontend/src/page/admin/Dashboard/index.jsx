import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Dashboard = () => {
  return (
    <div className="hero-section position-relative text-white">
      <img
        className="img-fluid w-100"
        src="https://play.vsthemes.org/frame/72/70072.webp"
        alt="Shopping"
        style={{ 
          filter: 'brightness(50%)',
          maxHeight: '80vh', 
          objectFit: 'cover' 
        }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="logo-img"> Welcome to the Admin Page</h1>
        <p className="fs-5 mb-4">
         this page only from Admins
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
