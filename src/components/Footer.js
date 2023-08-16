import React from "react";
import { NavLink } from "react-router-dom";
import mailicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/png-transparent-envelope-mail-icon-envelope-miscellaneous-angle-text-thumbnail.png'
import musicicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/vecteezy_round-square-music-icon-dj-turn-table_1206369.png'
import instaicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/hair-cutting-shears-scissors-computer-icons-clip-art-scissor-5038d5504ce2be4c57b429adfbbef258.png'
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
        <div className="footiconmusic">
         <a className="insta" href="https://www.instagram.com/maria_machete/" target="_blank" rel="noopener noreferrer">
             <img src={musicicon} className="instagram-small" alt="Instagram" /> </a>
  
             </div>
      <div className="footiconinsta">
         <a className="insta" href="https://instagram.com/djmarialinahair?igshid=MmIzYWVlNDQ5Yg==/" target="_blank" rel="noopener noreferrer">
             <img src={instaicon} className="instagram-small" alt="Instagram" /> </a>
  
             </div>

         <a className="instamail" href="mailto:djmarialinahair@gmail.com?subject=DJMARIALINA%20HAIRSTYLING" target="_blank" rel="noopener noreferrer">
             <img src={mailicon} className="instagram-small" alt="mail" /> </a>
       
             </div>
     
    

    </footer>
  );
}

export default Footer;
