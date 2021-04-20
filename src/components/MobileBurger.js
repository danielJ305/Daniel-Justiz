import React from 'react';
import { bool } from 'prop-types';
import { StyledBurger } from './StyledBurger';

const MobileBurger = ({ open, mobileToggle }) => (
    <StyledBurger open={open} onClick={mobileToggle}>
        <div></div>
        <div></div>
        <div></div>
    </StyledBurger>
)

MobileBurger.propTypes = {
  open: bool.isRequired,
}

export default MobileBurger;