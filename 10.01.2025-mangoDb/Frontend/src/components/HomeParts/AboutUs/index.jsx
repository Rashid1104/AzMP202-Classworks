import React from 'react'
import "./index.css"

const AboutUs = () => {
  return (
    <div className="product py-5">
      <div className="container">
      <div className="row cols">
      <div className="col-6 img-blue-box">
          <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt=""/>   
          <div className="blue-box">
            <h1>Trusted Merchant
           </h1>
           <span> for 50 years</span>
          </div>
        </div>
        <div className="col-6 text-col">
         <p> Merchant Company</p> 
         <h1>About Us</h1>
         <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!
         </p>

         <button className="btn-Cart" >Learn More</button>   
                                            
        </div>
        </div>
       
    </div>
    </div>
  )
}

export default AboutUs