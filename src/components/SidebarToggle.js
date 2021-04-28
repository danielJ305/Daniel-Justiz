import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import { RiArrowDropRightFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const SidebarToggle = (props) => {
    const clickedSocial = () => {
        ReactGA.event({
            category: 'User',
            action: 'Social Links',
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

    return (
        <div className="sidebar-toggle">
            <div className="top-container__social-list sidebar-toggle__social-list">
                <a onClick={clickedSocial} href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/" target="_blank"><RiLinkedinBoxLine/></a>
                <a onClick={clickedSocial} href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
                <a onClick={clickedSocial} href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
                <a onClick={clickedSocial} href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
            </div>
            <div className="button-icon sidebar-toggle__button">
                <a onClick={props.sidebarToggle}><RiArrowDropRightFill /></a>
            </div>
            <div className="sidebar-toggle__email">
                <a onClick={clickedEmail} href="mailto:danieljustiz9508@gmail.com" target="_blank">danieljustiz9508@gmail.com</a>
            </div>
        </div>
    )
    
    
}

export default SidebarToggle;