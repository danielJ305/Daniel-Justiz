import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { bool } from 'prop-types';
import { StyledMenu } from './StyledMenu';
import pdf from '../../public/Media/DanielResumeV2.pdf';

const MobileMenu = ({open}) => (
    <StyledMenu open={open} >
        <a><Link 
            to="about-me"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
        >About Me -</Link></a>
        <a><Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
        >Experience -</Link></a>
        <a><Link
            to="work"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
        >My Work -</Link></a>
        <div className="mobile-menu--resume-container">
          <a href={pdf} target="_blank" className="resume-container__button">RESUME</a>
        </div>
    </StyledMenu>
    
)

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu;