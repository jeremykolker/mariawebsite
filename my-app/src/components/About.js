import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>This is the about page</h1>

            <li> <Link to="/">Click to view our about page</Link></li>
     <li><Link to="contact">Click to view our contact page</Link></li>
     <li><Link to="services">Click to view our services page</Link></li>
        </div>
    )
}

export default About