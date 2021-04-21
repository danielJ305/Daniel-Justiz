import React from 'react';
// import background from '../../public/Media/dark-BG-texture.jpg';
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
    }

    // style={{ backgroundImage: `url(${background})` }}
    
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