import React from 'react';
import AboutIntro from './AboutIntro'
import AboutMe from './AboutMe';
import Experience from './Experience';
import WorkShowcase from './WorkShowcase';


class MainContainer extends React.Component {

    render = () => (
        <div className="main-container">
            <div className="about">
                <div className="about--section about--section-intro">
                    <AboutIntro />
                </div>
                <div className="about--section about--section-aboutme">
                    <AboutMe />
                </div>
                <div className="about--section">
                    <Experience />
                </div>
            </div>
            <div className="work-showcase">
                <WorkShowcase />
            </div>
        </div>
    )
}

export default MainContainer;