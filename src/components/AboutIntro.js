import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";

const AboutIntro = () => {
    const clicked = () => {
        ReactGA.event({
            category: 'User',
            action: 'To Get in Touch',
            label: 'Get In Touch'
        });
    }

    return (
        <Fade bottom cascade delay={700}>
            <div>
                <h3>Hello, my name is</h3>
                <h1>Daniel Justiz</h1>
                <h2>I build things for the web.</h2>
                <p>I'm a Miami-based Front-End Developer who specializes in building
                    digital experiences. Currently, I'm a Web Designer & Content Creator at <span className="highlight">Freight Hub Group </span>
                    focused on building accessible, B2B interactions.</p>
                <a>
                <Link 
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>
                    <button onClick={clicked} className="contact__button">Get In Touch</button>
                </Link>
                </a>
            </div>
        </Fade>
    );
}

export default AboutIntro;