import React from 'react';

const MobileMenu = (props) => (


    <div className="mobile-menu" open={props.mobileOpened} >
        <a href="/">About Me</a>
        <a href="/">Experience</a>
        <a href="/">My Work</a>
    </div>
)

export default MobileMenu;