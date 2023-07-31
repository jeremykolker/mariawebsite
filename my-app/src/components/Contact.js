import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>CONTACT INFO </h1> 
            <p> Mariehlina@gmail.com</p>
            <p> Phone 347-589-7300</p>
        <p>Address - 73 Malcolm X blvd, Brooklyn, NYC, 11221 </p>

        <ul>
        <li> <Link to="/">Click to view our home page</Link></li>
            <li> <Link to="/about">Click to view our about page</Link></li>
     <li><Link to="/contact">Click to view our contact page</Link></li>
     <li><Link to="/services">Click to view our services page</Link></li>
    
     </ul>
     IG for Hair @marialinahair

IG for Gigs- @maria_machete
        </div>
    )
}

export default Contact