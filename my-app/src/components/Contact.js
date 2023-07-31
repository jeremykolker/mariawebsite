import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>CONTACT INFO </h1> 
            <p> Mariehlina@gmail.com</p>
            <p> Phone 347-589-7300</p>
        <p>Address - 71 Malcolm X Blvd, Brooklyn, NY 11206 </p>

        <ul>
        <li> <Link to="/home">Click to view our home page</Link></li>
            <li> <Link to="/about">Click to view our about page</Link></li>
     <li><Link to="contact">Click to view our contact page</Link></li>
     <li><Link to="services">Click to view our services page</Link></li>
    
     </ul>
        </div>
    )
}

export default Contact