import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../public/Media/DJ-logo-01.svg';


const SidebarLogo = () => (
    <div className="sidebar-logo"> 
        <Link 
        to="about-intro"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
            <Logo className="logo" />
        </Link>
    </div>
)

export default SidebarLogo;