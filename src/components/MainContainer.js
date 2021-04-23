import React from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../../public/Media/DJ-logo-01.svg';
import AboutIntro from './AboutIntro'
import AboutMe from './AboutMe';
import Experience from './Experience';
import WorkShowcase from './WorkShowcase';
import ContactMe from './ContactMe';
import MobileSocialInfo from './MobileSocialInfo';
import Footer from './Footer';

class MainContainer extends React.Component {

    render = () => (
        <div className="main-container">
            <Fade>
                <div className="main-container__logo">
                    <Logo className="logo" />
                </div>
            </Fade>
            <div className="about">
                <div id="about-intro" className="about--section about--section-intro">
                    <AboutIntro />
                </div>
                <div id="about-me" className="about--section about--section-aboutme">
                    <AboutMe />
                </div>
                <div id="experience" className="about--section about--section-experience">
                    <Experience />
                </div>
            </div>
            <div id="work" className="work-showcase">
                <WorkShowcase />
            </div>
            <div className="mobile-social-info">
                <MobileSocialInfo />
            </div>
            <div id="contact" className="contact">
                <ContactMe />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default MainContainer;