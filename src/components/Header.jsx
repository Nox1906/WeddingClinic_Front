import React from "react";

import Navbar from './Navbar'
import ScrolledNavbar from './ScrolledNavbar'
import "./Header.scss";

const Header = () => {

  return (
    <>
      <div className='app__header-spacing'></div>
      <Navbar />
      <ScrolledNavbar /> 
    </>
  )
};

export default Header;
