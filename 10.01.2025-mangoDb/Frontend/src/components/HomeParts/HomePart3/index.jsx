import React, { useState, useEffect } from 'react';
import heroImg from '../img/hero-img.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const HomePart3 = () => {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-30T20:31:00'); 
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ weeks, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section position-relative text-white">
      <img
        className="img-fluid w-100"
        src={heroImg}
        alt="Shopping"
        style={{
          filter: 'brightness(50%)',
          maxHeight: '95vh',
          objectFit: 'cover',
        }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <p>Special Promo</p>
        <h1 className="logo-text">Summer Sale</h1>
        <p className="fs-5 mb-4">
          Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
        </p>
        <div className="d-flex justify-content-center mb-4">
          {['weeks', 'days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
            <div key={index} className="text-center mx-2">
              <div className="fs-2">{timeLeft[unit].toString().padStart(2, '0')}</div>
              <div>{unit}</div>
            </div>
          ))}
        </div>
        <button className="btn btn-Shop-Now">Shop Now</button>
      </div>
    </div>
  );
};

export default HomePart3;
