import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import { Link, animateScroll as scroll } from "react-scroll";
import { bool } from 'prop-types';
import { StyledMenu } from './StyledMenu';
import pdf from '../../public/Media/DanielResumeV2.pdf';

const MobileMenu = ({open}) => {
    const clickedResume = () => {
        ReactGA.event({
            category: 'User',
            action: 'Mobile Resume Clicked',
            label: 'Sidebar'
        });
    }

    const clickedNavigation = () => {
        ReactGA.event({
            category: 'User',
            action: 'Mobile Navigated Website',
            label: 'Sidebar'
        });
    }

    return (
        <StyledMenu open={open} >
            <a onClick={clickedNavigation}><Link 
                to="about-me"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
            >About Me -</Link></a>
            <a onClick={clickedNavigation}><Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
            >Experience -</Link></a>
            <a onClick={clickedNavigation}><Link
                to="work"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
            >My Work -</Link></a>
            <div className="mobile-menu--resume-container">
            <a onClick={clickedResume} href={pdf} target="_blank" className="resume-container__button">RESUME</a>
            </div>
        </StyledMenu>
    )  
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu;