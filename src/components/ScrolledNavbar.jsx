import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { images, navLinks, navDropDownLinks } from '../constants';
import './ScrolledNavbar.scss';



function ScrolledNavbar() {
    const [seeScrolledNavbar, setSeeScrolledNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 247;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            setSeeScrolledNavbar(true);
        }
        if (winScroll <= heightToHideFrom) {
            setSeeScrolledNavbar(false);
        }
    };

    return (
        <>
            {seeScrolledNavbar && (
                <motion.div
                    whileInView={{ y: [-100, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className='navscrolled-motiondiv'
                >
                    <nav className="app__scrollednavbar">
                        <div className="app__scrollednavbar-logo">
                            <a href="/">
                                <img src={images.logo} alt="logo" />
                            </a>
                        </div>
                        <ul className="app__scrollednavbar-links">
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
                    </nav>
                </motion.div>
            )}
        </>
    )
}

export default ScrolledNavbar;
