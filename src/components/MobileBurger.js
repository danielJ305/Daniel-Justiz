import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './StyledBurger';

const MobileBurger = ({ open, setOpen }) => (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </StyledBurger>
)

MobileBurger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default MobileBurger;