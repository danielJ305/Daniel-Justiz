import React from 'react';
import Fade from 'react-reveal/Fade';
import { RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";
import pdf from '../../public/Media/DanielResume-compressed.pdf';

const MobileSocialInfo = () => (
    <Fade bottom cascade duration={600} delay={300}>
        <div className="mobile-social-wrapper">
            <div className="mobile-social__list">
                <a href="https://www.linkedin.com/feed/" target="_blank"><RiLinkedinBoxLine/></a>
                <a href="https://github.com/danielJ305" target="_blank"><RiGithubFill/></a>
                <a href="https://www.instagram.com/danieljustfish/" target="_blank"><RiInstagramLine/></a>
                <a href="https://www.behance.net/danieljustizMedia/" target="_blank"><RiBehanceFill/></a>
            </div>
            <div className="mobile-social__info">
                <a href={pdf} target="_blank" className="mobile-social__resume">RESUME</a>
                <a className="info__email" href="mailto:danieljustiz9508@gmail.com" target="_blank">danieljustiz9508@gmail.com</a>
                <p>Miami, FL</p>
            </div>
        </div>
    </Fade>
)

export default MobileSocialInfo;