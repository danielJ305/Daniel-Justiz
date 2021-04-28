import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import SidebarToggle from './SidebarToggle';
import MobileBurgerMenu from './MobileBurgerMenu';
import SidebarLogo from './SidebarLogo';

export default class DjWebsite extends React.Component {
    // Desktop Sidebar   
    state = {
        sidebarOpened: true,
    }

    clickedToggleSidebar = () => {
        ReactGA.event({
            category: 'User',
            action: 'Sidebar Toggled',
            label: 'Sidebar'
        });
    }

    sidebarToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const mainContainer = document.querySelector('.main-container');
        const sidebarLogo = document.querySelector('.sidebar-logo');

        if (this.state.sidebarOpened) {
            this.setState(() => ({ sidebarOpened: false }))
            sidebar.className += " sidebar--close";
            sidebarToggle.className += " sidebar-toggle-open";
            mainContainer.className += " main-container--center";
            sidebarLogo.className += " sidebar-logo-open";
        } else if (this.state.sidebarOpened === false) {
            this.setState(() => ({ sidebarOpened: true }))
            sidebar.classList.remove('sidebar--close');
            sidebarToggle.classList.remove('sidebar-toggle-open');
            mainContainer.classList.remove('main-container--center');
            sidebarLogo.classList.remove('sidebar-logo-open');
        }

        clickedToggleSidebar();
    }
    
    render = () => (
        <div className="main-body-wrapper" >
            <MobileBurgerMenu />
            <Sidebar
                sidebarToggle={this.sidebarToggle}
            />
            <MainContainer />
            <SidebarToggle
                sidebarToggle={this.sidebarToggle}
            />
            <SidebarLogo />
        </div>
    )
}