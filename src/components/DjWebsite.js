import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer'

export default class DjWebsite extends React.Component {

    render = () => (
        <div className="main-body-wrapper">
            <Sidebar />
            <MainContainer />
        </div>
    )
}