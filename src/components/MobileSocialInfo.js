import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import Fade from 'react-reveal/Fade';
import { RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";
import pdf from '../../public/Media/DanielResumeV2.pdf';

const MobileSocialInfo = () => {
    const clickedSocial = () => {
        ReactGA.event({
            category: 'User',
            action: 'Social Links',
            label: 'Social'
        });
    }

    const clickedResume = () => {
        ReactGA.event({
            category: 'User',
            action: 'Resume Clicked',
            label: 'Resume'
        });
    }

    const clickedEmail = () => {
        ReactGA.event({
            category: 'User',
            action: 'Email Clicked',
            label: 'Email'
        });
    }

    return (
        <Fade bottom cascade duration={600} delay={300}>
            <div className="mobile-social-wrapper">
                <div className="mobile-social__list">
                    <a onClick={clickedSocial} href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/" target="_blank"><RiLinkedinBoxLine/></a>
                    <a onClick={clickedSocial} href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
                    <a onClick={clickedSocial} href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
                    <a onClick={clickedSocial} href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
                </div>
                <div className="mobile-social__info">
                    <a onClick={clickedResume} href={pdf} target="_blank" className="mobile-social__resume">RESUME</a>
                    <a onClick={clickedEmail} className="info__email" href="mailto:danieljustiz9508@gmail.com" target="_blank">danieljustiz9508@gmail.com</a>
                    <p>Miami, FL</p>
                </div>
            </div>
        </Fade>
    )
}

export default MobileSocialInfo;