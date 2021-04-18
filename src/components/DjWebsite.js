import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import SidebarToggle from './SidebarToggle';
import MobileBurger from './MobileBurger';
import MobileMenu from './MobileMenu';
export default class DjWebsite extends React.Component {
    // Desktop Sidebar   
    state = {
        sidebarOpened: true,
        mobileOpened: false
    }

    sidebarToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const mainContainer = document.querySelector('.main-container');

        if (this.state.sidebarOpened) {
            this.setState(() => ({ sidebarOpened: false }))
            sidebar.className += " sidebar--close";
            sidebarToggle.className += " sidebar-toggle-open"
            mainContainer.className += " main-container--center";
        } else if (this.state.sidebarOpened === false) {
            this.setState(() => ({ sidebarOpened: true }))
            sidebar.classList.remove('sidebar--close')
            sidebarToggle.classList.remove('sidebar-toggle-open')
            mainContainer.classList.remove('main-container--center')
        }
    }

    mobileToggle = () => {
        const mobileMenu = document.querySelector('.mobile-menu');

        this.setState(() => ({
            mobileOpened: !this.state.mobileOpened
        }));

        if (this.state.mobileOpened === true) {
            mobileMenu.className += " mobile-menu-opened";
        } else if (this.state.mobileOpened === false) {
            mobileMenu.remove('mobile-menu-opened');
        }

    }

    
    render = () => (
        <div className="main-body-wrapper">
            <MobileBurger 
                mobileOpened={this.state.mobileOpened}
                mobileToggle={this.mobileToggle}
            />
            <MobileMenu
                mobileOpened={this.state.mobileOpened} 
                mobileToggle={this.mobileToggle}
            />
            <Sidebar
                sidebarToggle={this.sidebarToggle}
            />
            <MainContainer />
            <SidebarToggle
                sidebarToggle={this.sidebarToggle}
            />
            
        </div>
    )
}