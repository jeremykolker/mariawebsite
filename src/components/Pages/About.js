import React from "react";
import photo1 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3690.jpg'
import photo2 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_3689.jpg'
import photo3 from '/Users/jeremykolker/dev/Ollivanders/mariawebsite/src/IMG_4454.jpg'

export const About = () => {
  return (
    <div>

       <img src={photo3} className="responsive-image" />
       <div className="photocred">
       <p>illustration by Crystal Lee Kovacs</p>
       </div>
   
       <div class="about-container">
  <div class="about-card">
<p>Maria Lina is a community-minded and multi-skilled artist, born in Miami and raised in Ridgewood, Queens. She has a background in fine art, music, skateboarding, and the DIY scene. In 2012, she completed cosmetology school at Carsten Institute, specializing in cuts and color. She began her career as a hairdresser at Tomahawk Salon in Brooklyn and apprenticed at Head Chop in Brooklyn and John Sahag salon in Manhattan, honing her craft by styling a diverse cast of New Yorkers. 
 <br></br>
 <br></br>
 </p>
</div>

&nbsp;

<div class="about-card"><p>
Since 2018, she has been a Hair Stylist at Stag and Hen Hair Studio, a Black-owned business in Bedford-Stuyvesant. In 2017, she started working as a vinyl DJ, spinning everything from post-punk to Italo disco. She has played in clubs all over the city, becoming a fixture in the rock n' roll nightlife scene at venues such as Music Hall of Williamsburg, Baby's All Right, TV EYE, Danger Danger, BIRDY'S, Coyote Club, Our Wicked Lady, and Hotel Delmano, as well as performing at weddings and private events.
<br></br>
<br></br>
Coming from a musically inclined family, Maria has been singing her whole life. In 2019, after years of community involvement, she founded Frida Kill. In the band, Maria sings her original songs and plays bass guitar, drums, and synthesizers. The band's debut album is set to release this year on vinyl.</p>
    </div>


   

    </div>

    <img src={photo1} alt="photo1" className="responsive-image-about" />
       <div className="photocred">
       <p>photograph by Jeanette D. Moses</p>
       </div>

   
     
    </div>
  );
};
