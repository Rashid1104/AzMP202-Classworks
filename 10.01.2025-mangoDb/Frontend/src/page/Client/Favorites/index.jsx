import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useFavorites } from '../../../../src/components/context/FavContext'; 

const Favorites = () => {
  const { favorites, updateFavorites } = useFavorites(); 
  const [localFavorites, setLocalFavorites] = useState([]);

  useEffect(() => {
    setLocalFavorites(favorites); 
  }, [favorites]);

  return (
    <div>
      <h1>Your Favorites</h1>
      {localFavorites.length > 0 ? (
        <div className="row">
          {localFavorites.map((p) => (
            <div className="col-md-4 col-sm-6 col-12 mb-4" key={p.id}>
              <div className="product-card text-center position-relative">
                <div className="image-container">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="product-image img-fluid"
                  />
                  <div className="hover-square"></div>
                </div>
                <h3 className="h3-text">{p.title}</h3>
                <div className="rating mb-2">
                  <span>
                    <FaStar className="star" /> {p.rating}
                  </span>
                  <span>
                    <FaHeart
                      className={favorites.some((fav) => fav.id === p.id) ? 'heart-red' : 'heart'}
                      onClick={() => updateFavorites(p)} 
                    />{' '}
                    {p.reviews}
                  </span>
                </div>
                <p className="p-decs">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
