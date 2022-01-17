import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div class = "flex sm:flex-row flex-col sm:gap-x-14 gap-x-8 sm:gap-y-0 gap-y-2 items-center justify-center mt-5 text-2xl text-darkGreen">
        <div>
          <Link to="/">Home</Link>
        </div>
        
        <div>
          <Link to="/exp">Experience</Link>
        </div>
        
        <div>
          <Link to="/contact">Contact</Link>    
        </div>
    </div>

  );
}

export default Navbar;