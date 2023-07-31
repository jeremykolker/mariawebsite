import React from 'react'
import { Link } from "react-router-dom";

function Services() {
    return (
        <div>
            <h1>This is the service page</h1>

            <ul>
            <li> <Link to="/about">Click to view our about page</Link></li>
     <li><Link to="contact">Click to view our contact page</Link></li>
     <li><Link to="services">Click to view our services page</Link></li>
     <li> <Link to="/homet">Click to view our about page</Link></li>
     </ul>
        </div>
    )
}

export default Services