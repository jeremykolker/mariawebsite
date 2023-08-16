import React from "react";
import { NavLink } from "react-router-dom";
import mailicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/png-transparent-envelope-mail-icon-envelope-miscellaneous-angle-text-thumbnail.png'
import instaicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/instagram.png'
import logo from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_4429 copy-PhotoRoom.png-PhotoRoom.png'
import "./Footer.css"; // Don't forget to create the corresponding CSS file


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      

   

        <div className="footer-logo">
          <NavLink exact to="/" className="nav-logo">
          <img src={logo} className="logo" alt="Logo" />
          </NavLink>
        </div>
        </div>


    
         
        <div className="links">
      
         <a className="insta" href="https://instagram.com/djmarialinahair?igshid=MmIzYWVlNDQ5Yg==/" target="_blank" rel="noopener noreferrer">
             <img src={instaicon} className="instagram-small" alt="Instagram" /> </a>
  
        
       
         <a className="instamail" href="mailto:djmarialinahair@gmail.com?subject=DJMARIALINA%20HAIRSTYLING" target="_blank" rel="noopener noreferrer">
             <img src={mailicon} className="instagram-small" alt="mail" /> </a>
       
             </div>
     
    

    </footer>
  );
}

export default Footer;
