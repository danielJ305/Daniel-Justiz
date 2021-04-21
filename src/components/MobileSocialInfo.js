import React from 'react';
import { RiBehanceFill, RiGithubFill, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const MobileSocialInfo = () => (
    <div className="mobile-social-wrapper">
        <div className="mobile-social__list">
            <a><RiLinkedinBoxLine/></a>
            <a><RiGithubFill/></a>
            <a><RiInstagramLine/></a>
            <a><RiBehanceFill/></a>
        </div>
        <div className="mobile-social__info">
            <a className="mobile-social__resume">RESUME</a>
            <a>danieljustiz9508@gmail.com</a>
            <p>Miami, FL</p>
        </div>
    </div>
)

export default MobileSocialInfo;