import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
        <div className='mr-20'>
            <Link className="text-xl px-4 font-extrabold font-xl text-gray-500 hover:text-black-900" to="/about">
                About
            </Link>
            <Link className="text-xl px-4 font-extrabold text-gray-500 hover:text-black-900" to="/services">
                Portfolio
            </Link>
    
            <Link className="text-xl px-4 font-extrabold text-gray-500 hover:text-black-900" to="/contact">
                Contact 
            </Link>
            </div>
        </>
    )
}

export default NavLinks;