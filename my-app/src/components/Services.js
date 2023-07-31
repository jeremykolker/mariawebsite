import React from 'react'
import { Link } from "react-router-dom";

function Services() {
    return (
        <div>
            <h1>This is the services page</h1>

            <p>
            HAIRCUT SERVICES -



Long Haircut- $80 (Includes wash and Blowdry)



Short haircut- (Above Jawline) $56 



Shape up- (back and sides only, no wash) $25



Bang Trim- $13



Bang + Face Framing - $20 



Dry cuts (must come in with pre washed hair in its natural state) $70 



Blow dry $65 starting price 





COLOR SERVICES- 

Double Process -$300 starting price 



Double Process re-touch (only an inch of hair growth) $160 



Single process- $95 starting price 



Full head of highlights- $350 starting price 



Full head re-touch- $200



Half Head of Highlights- $200 starting price



 Partial Highlights- $170 



T-section highlights- $140 


Double process on pixie or buzzed cuts $140 



Panels- $50 per section 



Full balayage- $350 starting price 



Toners included in color services 



Toner- $50 (no blowdry) 



Toner with blowdry service- $75



Deep conditioning treatment- $100



Color Corrections upon consultation 


            </p>

            <ul>
            <li> <Link to="/">Click to view our home page</Link></li>
     <li><Link to="/contact">Click to view our contact page</Link></li>
     <li><Link to="/services">Click to view our services page</Link></li>
     <li> <Link to="/about">Click to view our about page</Link></li>
     </ul>
        </div>
    )
}

export default Services