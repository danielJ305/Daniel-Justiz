import React from 'react';
import AboutMe from './AboutMe';
import MyPlan from './MyPlan';
import Skills from './Skills';
import WorkShowcase from './WorkShowcase';

class MainContainer extends React.Component {

    render = () => (
        <div className="main-container">
            <div className="about">
                <div className="about--section">
                    <AboutMe />
                    <MyPlan />
                </div>
                <div className="about--section">
                    <Skills />
                </div>
            </div>
            <div className="work-showcase">
                <WorkShowcase />
            </div>
        </div>
    )
}

export default MainContainer;