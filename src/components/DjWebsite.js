import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import SidebarToggle from './SidebarToggle';

export default class DjWebsite extends React.Component {
        state = {
        sidebarOpened: true
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
    
    render = () => (
        <div className="main-body-wrapper">
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