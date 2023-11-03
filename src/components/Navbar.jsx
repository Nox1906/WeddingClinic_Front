import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images, navLinks, navDropDownLinks } from '../constants';
import './Navbar.scss';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="app__navbar" >
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => {
          if (item.DropdownItems.length > 0) {
            return (
              <div className='dropdown' key={`link-${item.id}`}>
                <li >
                  <a href={`${item.link}`}>{item.title}</a>
                </li>
                <div className="dropdown-options">
                  {navDropDownLinks.map((Dropitem) => (
                    <li key={`link-${Dropitem.id}`} style={{ padding: '10px' }}>
                      <a href={`${Dropitem.link}`}>{Dropitem.title}</a >
                    </li>
                  ))}
                </div>
              </div>
            )
          } else {
            return (
              <div key={`link-${item.id}`}>
                <li >
                  <a href={`${item.link}`}>{item.title}</a>
                </li>
              </div>
            )
          }
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='nav-motiondiv'
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item) => {
                if (item.DropdownItems.length > 0) {
                  return (
                    <div className='dropdown' key={`link-${item.id}`}>
                      <li >
                        <a href={`${item.link}`} onClick={() => setToggle(false)}>{item.title}</a>
                      </li>
                      <div className="dropdown-options">
                        {navDropDownLinks.map((Dropitem) => (
                          <li key={`link-${Dropitem.id}`} style={{ padding: '10px' }}>
                            <a href={`${Dropitem.link}`} onClick={() => setToggle(false)}>{Dropitem.title}</a >
                          </li>
                        ))}
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div key={`link-${item.id}`}>
                      <li >
                        <a href={`${item.link}`} onClick={() => setToggle(false)} >{item.title}</a>
                      </li>
                    </div>
                  )
                }
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;