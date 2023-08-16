import React from "react";
import photo2 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3689.jpg'
import instaicon from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/instagram.png'


export const Contact = () => {
  return (
    <div className="contact-container">
   
        <img src={photo2} alt="photo2" className="responsive-image" />
     
        <h3 className="scheduling">For Scheduling & General Inquiries:</h3>
      <div className="contact-card">
       
        <ul>
        <li><a href="mailto:djmarialinahair@gmail.com?subject=DJMARIALINA%20HAIRSTYLING">DJMariaLinaHair</a>
</li>
        <li>Phone: (646) 535-9812</li>
          <li>Address: 71 Malcolm X Blvd, Brooklyn, NYC 11206</li>
        
          {/* <p onClick={() => window.location = 'mailto:mariehlina@gmail.com'}>Email: Mariehlina@gmail.com</p> */}
          <li>
            Instagram for Hair <a className="insta" href="https://instagram.com/djmarialinahair?igshid=MmIzYWVlNDQ5Yg==/" target="_blank" rel="noopener noreferrer">
              <img src={instaicon} className="instagram-small" alt="Instagram" />
            </a>
          </li>
          <li>
            Instagram for Music <a className="insta" href="https://www.instagram.com/maria_machete/" target="_blank" rel="noopener noreferrer">
              <img src={instaicon} className="instagram-small" alt="Instagram" />
            </a>
          </li>
        
            
            </ul>
          
        
      </div>
    </div>
  );
}

export default Contact;