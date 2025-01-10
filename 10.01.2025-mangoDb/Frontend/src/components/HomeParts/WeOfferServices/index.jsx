import React from 'react';
import { FaChartPie, FaTimesCircle, FaBriefcase } from 'react-icons/fa';
import { IoMdCloudDone } from "react-icons/io";
import { PiClockCountdown } from "react-icons/pi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import "./index.css"

const WeOfferServices = () => {
  return (
    <div className="products py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="Popular-Products">Our Services</span>
          <h1 className="Our-Products">We Offer Services</h1>
        </div>
        <div className="row">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <FaChartPie size={50} className="text-warning mb-3" />
              <h4>Business Consulting</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <FaTimesCircle size={50} className="text-warning mb-3" />
              <h4>Market Analysis</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <PiClockCountdown size={50} className="text-warning mb-3" />
              <h4>User Monitoring</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
          </div>
          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <BsBookmarkCheckFill size={50} className="text-warning mb-3" />
              <h4>Seller Consulting</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
          </div>
          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <FaBriefcase size={50} className="text-warning mb-3" />
              <h4>Financial Investment</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
            
          </div>
          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <IoMdCloudDone size={50} className="text-warning mb-3" />
              <h4>Financial Management</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#!" className="text-warning">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOfferServices;
