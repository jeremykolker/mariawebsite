import React from "react";
import photo from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_4429.jpg'



export const Services = () => {
  return (
    <div>


 <div class="services-container">
  
 <img src={photo} alt="photo" className="responsive-image" />
 <div className="photocred">
       <p>illustration by Crystal Lee Kovacs</p>
       </div>
 <br></br>
  <div class="service-card">
    <h3>HAIRCUT SERVICES</h3>
    <ul>
      <li>Long Haircut - $80 (includes wash & blowdry)</li>
      <li>Short Haircut (above jawline) - $56</li>
      <li>Shape Up (back & sides, no wash) - $25</li>
      <li>Bang Trim - $13</li>
      <li>Bang + Face Framing - $20</li>
      <li>Dry Cuts (must come with prewashed hair in its natural state) - $70</li>
      <li>Blow Dry - $65 Starting Price</li>
    </ul>
  </div>

 

  <div class="service-card">
    <h3>COLOR SERVICES</h3>
    <ul>
      <li>Double Process - $300 Starting Price</li>
      <li>Double Process re-touch (only an inch of hair growth) - $160</li>
      <li>Single Process - $95 Starting Price</li>
      <li>Full Head of Highlights - $350 Starting Price</li>
      <li>Full Head Re-Touch - $200</li>
      <li>Half Head of Highlights - $200 Starting Price</li>
      <li>Partial Highlights - $170</li>
      <li>T-section Highlights - $140</li>
      <li>Full Balayage - $350 Starting Price</li>
      <li>Double Process on Pixie or Buzz Cuts - $140</li>
      <li>Panels - $50 per section</li>
      <li>Toners Included in Color Services</li>
      <li>Toner - $50 (no blowdry)</li>
      <li>Toner with Blowdry service - $75</li>
      <li>Deep Conditioning Treatment - $100</li>
      <li>Creative Color included in Bleach +10 for each additional color</li>
      <li>Color Corrections (upon consultation)</li>
    </ul>
  </div>
  <br></br>
  <h4>24 hours cancellation policy, no shows will not be booked again.</h4>
</div>


    </div>
  );
};
