import React from 'react';

const MobileBurger = (props) => (
    <div className="mobile-burger" open={props.mobileOpened} onClick={props.mobileToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default MobileBurger;