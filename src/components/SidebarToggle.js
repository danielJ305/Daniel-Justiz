import React from 'react';

import { RiArrowDropRightFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const SidebarToggle = (props) => (
    <div className="sidebar-toggle">
        <div className="top-container__social-list sidebar-toggle__social-list">
            <a href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/" target="_blank"><RiLinkedinBoxLine/></a>
            <a href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
            <a href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
            <a href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
        </div>
        <div className="button-icon sidebar-toggle__button">
            <a onClick={props.sidebarToggle}><RiArrowDropRightFill /></a>
        </div>
        <div className="sidebar-toggle__email">
            <a href="mailto:danieljustiz9508@gmail.com" target="_blank">danieljustiz9508@gmail.com</a>
        </div>
    </div>
    
)

export default SidebarToggle;