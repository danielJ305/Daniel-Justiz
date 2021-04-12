import React from 'react';

const Sidebar = (props) => (
    <div className="sidebar">
        <div className="sidebar--top-container">
            <div className="top-container__social-list">
                <a>LinkedIn</a>
                <a>Github</a>
                <a>Instagram</a>
                <a>Behance</a>
            </div>
            <div>
                LOGO
            </div>
        </div>
        <div className="sidebar--mid-container">
            <div className="mid-container__navigation-list">
                <a>About Me</a>
                <a>Experience</a>
                <a>My Work</a>
            </div>
            <div className="mid-container__toggle-btn">
                <a onClick={props.sidebarToggle}>Close</a>
            </div>
        </div>
        <div className="sidebar--bottom-container">bottom</div>
    </div>
)


export default Sidebar;