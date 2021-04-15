import React from 'react';
import AboutIntro from './AboutIntro'
import AboutMe from './AboutMe';
import Experience from './Experience';
import WorkShowcase from './WorkShowcase';
import ContactMe from './ContactMe';
import Footer from './Footer';

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
                <div className="about--section about--section-experience">
                    <Experience />
                </div>
            </div>
            <div className="work-showcase">
                <WorkShowcase />
            </div>
            <div className="contact">
                <ContactMe />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default MainContainer;