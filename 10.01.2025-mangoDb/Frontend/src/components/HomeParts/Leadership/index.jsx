import React from 'react'
import "./index.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Leadership = () => {
  return (
    <div className="product py-5">
      <div className="container">
        <div className='text-center mb-5'>
             <span className="Popular-Products">Team</span>
      <h1 className="Our-Products">Leadership</h1>
        </div>
     
      <div className="row">
      <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" width={300}/>
<div className="texts">
   <p>
John Rooster
</p>
<span className='span-text'>Co-Founder, President</span>
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 
<div className="icons">
    <button className="icon-btn">
        <FaFacebookF className="icon" />
    </button>
    <button className="icon-btn">
        <FaTwitter className="icon" />
    </button>
    <button className="icon-btn">
        <FaLinkedinIn className="icon" />
    </button>
    <button className="icon-btn">
        <FaInstagram className="icon" />
    </button>
</div>

</div>
        </div>
        <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" width={300}/>
<div className="texts">
   <p>
   Tom Sharp
</p>
<span className='span-text'>Co-Founder, COO</span>
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 
<div className="icons">
    <button className="icon-btn">
        <FaFacebookF className="icon" />
    </button>
    <button className="icon-btn">
        <FaTwitter className="icon" />
    </button>
    <button className="icon-btn">
        <FaLinkedinIn className="icon" />
    </button>
    <button className="icon-btn">
        <FaInstagram className="icon" />
    </button>
</div>
</div>
        </div>
        <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" width={300}/>
<div className="texts">
   <p> Winston Hodson</p>
<span className='span-text'>Marketing</span>  
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 
<div className="icons">
    <button className="icon-btn">
        <FaFacebookF className="icon" />
    </button>
    <button className="icon-btn">
        <FaTwitter className="icon" />
    </button>
    <button className="icon-btn">
        <FaLinkedinIn className="icon" />
    </button>
    <button className="icon-btn">
        <FaInstagram className="icon" />
    </button>
</div>
</div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Leadership