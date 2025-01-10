import React from 'react';
import './index.css'; 

const Loader = () => {
  return (
    <div className="loader">
      <img
        src="https://img.cryptorank.io/coins/chill_guy1731936768520.png"
        alt="Loading..."
        className="spinner-image"
      />
    </div>
  );
};

export default Loader;

