import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';  

const GetInTouch = () => {
    const Submit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className="contact-form products py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="Popular-Products">Contact Form</span>     
          <h1 className="Our-Products">Get In Touch</h1>
        </div>

        <div className="row cols-t">
            <h2 className=''>Contact Form</h2>
          <div className="col-lg-8 mx-auto">
            <form>
              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder='Write your notes or questions here...'></textarea>
                </div>
              </div>

              <div className="text-left">
                <button type="submit" className="btn-Cart" onClick={Submit}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
