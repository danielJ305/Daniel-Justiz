import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../public/Media/DJ-logo-01.svg';
import pdf from '../../public/Media/DanielResumeV2.pdf';

import { RiArrowDropLeftFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const Sidebar = (props) => (
    <div className="sidebar">
        <div className="sidebar--top-container">
            <Fade bottom cascade delay={0}>
                <div className="top-container__social-list">
                    <a href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/" target="_blank"><RiLinkedinBoxLine/></a>
                    <a href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
                    <a href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
                    <a href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
                </div>
            </Fade>
            <Fade bottom cascade delay={700}>
                <div className="top-container__logo">
                    <Logo className="logo" />
                </div>
            </Fade>
        </div>
        <div className="sidebar--mid-container">
            <Fade bottom cascade delay={100}>
                <div className="mid-container__navigation-list">
                    <a><Link 
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={200}
                    >About Me -</Link></a>
                    <a><Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={400}
                    >Experience -</Link></a>
                    <a><Link
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
                <a href={pdf} target="_blank" className="bottom-container__resume">RESUME</a>
                <a href="mailto:danieljustiz9508@gmail.com" target="_blank" className="bottom-container__email">danieljustiz9508@gmail.com</a>
                <p>Miami, FL</p>
            </div>
        </Fade>
    </div>
)


export default Sidebar;