import React from 'react';
import Logo from '../../public/Media/DJ-logo-01.svg';

import { RiArrowDropLeftFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const Sidebar = (props) => (
    <div className="sidebar">
        <div className="sidebar--top-container">
            <div className="top-container__social-list">
                <a><RiLinkedinBoxLine/></a>
                <a><RiGithubFill/></a>
                <a><RiInstagramLine/></a>
                <a><RiBehanceFill/></a>
            </div>
            <div className="top-container__logo">
                <Logo className="logo" />
            </div>
        </div>
        <div className="sidebar--mid-container">
            <div className="mid-container__navigation-list">
                <a>About Me -</a>
                <a>Experience -</a>
                <a>My Work -</a>
            </div>
            <div className="mid-container__toggle-btn">
                <a onClick={props.sidebarToggle}><RiArrowDropLeftFill className="button-icon" /></a>
            </div>
        </div>
        <div className="sidebar--bottom-container">
            <a className="bottom-container__resume">RESUME</a>
            <a>danieljustiz9508@gmail.com</a>
            <p>Miami, FL</p>
        </div>
    </div>
)


export default Sidebar;