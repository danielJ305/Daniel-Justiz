import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../public/Media/DJ-logo-01.svg';
import pdf from '../../public/Media/DanielResumeV2.pdf';

import { RiArrowDropLeftFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const Sidebar = (props) => {
    const clickedSocial = () => {
        ReactGA.event({
            category: 'User',
            action: 'Social Links',
            label: 'Sidebar'
        });
    }

    const clickedResume = () => {
        ReactGA.event({
            category: 'User',
            action: 'Resume Clicked',
            label: 'Sidebar'
        });
    }
    
    const clickedEmail = () => {
        ReactGA.event({
            category: 'User',
            action: 'Email Clicked',
            label: 'Sidebar'
        });
    }

    const clickedNavigation = () => {
        ReactGA.event({
            category: 'User',
            action: 'Navigated Website',
            label: 'Sidebar'
        });
    }

    return (
        <div className="sidebar">
            <div className="sidebar--top-container">
                <Fade bottom cascade delay={0}>
                    <div className="top-container__social-list">
                        <a onClick={clickedSocial} href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/" target="_blank"><RiLinkedinBoxLine/></a>
                        <a onClick={clickedSocial} href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
                        <a onClick={clickedSocial} href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
                        <a onClick={clickedSocial} href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
                    </div>
                </Fade>
                <Fade bottom cascade delay={700}>
                    <div className="top-container__logo">
                        <Link 
                        to="about-intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            <Logo className="logo" />
                        </Link>
                    </div>
                </Fade>
            </div>
            <div className="sidebar--mid-container">
                <Fade bottom cascade delay={100}>
                    <div className="mid-container__navigation-list">
                        <a onClick={clickedNavigation}><Link 
                            to="about-me"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={200}
                        >About Me -</Link></a>
                        <a onClick={clickedNavigation}><Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={400}
                        >Experience -</Link></a>
                        <a onClick={clickedNavigation}><Link
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                        >My Work -</Link></a>
                    </div>
                </Fade>
                <Fade bottom cascade delay={500}>
                    <div className="mid-container__toggle-btn">
                        <a onClick={props.sidebarToggle}><RiArrowDropLeftFill className="button-icon" /></a>
                    </div>
                </Fade>
            </div>
            <Fade bottom cascade delay={700}>
                <div className="sidebar--bottom-container">
                    <a onClick={clickedResume} href={pdf} target="_blank" className="bottom-container__resume">RESUME</a>
                    <a onClick={clickedEmail} href="mailto:danieljustiz9508@gmail.com" target="_blank" className="bottom-container__email">danieljustiz9508@gmail.com</a>
                    <p>Miami, FL</p>
                </div>
            </Fade>
        </div>
    )
}


export default Sidebar;