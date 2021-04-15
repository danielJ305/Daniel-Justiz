import React from 'react';
import { RiArrowDropRightFill, RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const SidebarToggle = (props) => (
    <div className="sidebar-toggle">
        <div className="top-container__social-list sidebar-toggle__social-list">
            <a><RiLinkedinBoxLine/></a>
            <a><RiGithubFill/></a>
            <a><RiInstagramLine/></a>
            <a><RiBehanceFill/></a>
        </div>
        <div className="button-icon sidebar-toggle__button">
            <a onClick={props.sidebarToggle}><RiArrowDropRightFill /></a>
        </div>
        <div className="sidebar-toggle__email">
            <a>danieljustiz9508@gmail.com</a>
        </div>
    </div>
    
)

export default SidebarToggle;