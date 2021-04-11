import React from 'react';

class Sidebar extends React.Component {
    state = {
        sidebarOpened: true
    }

    sidebarToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        const mainContainer = document.querySelector('.main-container');

        if (this.state.sidebarOpened) {
            this.setState(() => ({ sidebarOpened: false }))
            sidebar.className += " sidebar--close";
            mainContainer.className += " main-container--center";
        }
    }

    render = () => (
        <div className="sidebar">
            <div className="sidebar--top-container">
                <div className="top-container__social-list">
                    <a>LinkedIn</a>
                    <a>Github</a>
                    <a>Instagram</a>
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
                    <a onClick={this.sidebarToggle}>Close</a>
                </div>
            </div>
            <div className="sidebar--bottom-container">bottom</div>
        </div>
    )
}

export default Sidebar;