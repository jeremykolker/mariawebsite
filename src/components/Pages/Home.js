import React from "react";
import "./Home.css"; // Import a CSS file to apply the common styles
import photo from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_4430.jpg'
import photo1 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3591.jpg'
import photo2 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3593.jpeg'
import photo3 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3594.jpeg'
import photo4 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3595.jpeg'
import photo5 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3596.jpeg'
import photo6 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3597.jpeg'
import photo7 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3601.jpeg'
import photo8 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3604.jpeg'
import photo9 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3611.jpeg'
import photo10 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3615.jpeg'
import photo11 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3621.jpeg'
import photo12 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3626.jpeg'

export const Home = () => {
  return (
    <div>
   
    <div className="homephotos">

      <div className="image-container">
      <img src={photo} alt="photo" className="responsive-image" />
        <img src={photo1} alt="photo1" className="responsive-image" />
        <img src={photo2} alt="photo2" className="responsive-image" />
        <img src={photo3} alt="photo3" className="responsive-image" />
        <img src={photo4} alt="photo4" className="responsive-image" />
        <img src={photo5} alt="photo5" className="responsive-image" />
        <img src={photo6} alt="photo6" className="responsive-image" />
        <img src={photo7} alt="photo7" className="responsive-image" />
        <img src={photo8} alt="photo8" className="responsive-image" />
        <img src={photo9} alt="photo9" className="responsive-image" />
        <img src={photo10} alt="photo10" className="responsive-image" />
        <img src={photo12} alt="photo12" className="responsive-image" />
        <img src={photo11} alt="photo11" className="responsive-image" />
      </div>
      </div>
    </div>
  );
};
