import React from 'react';
import Fade from 'react-reveal/Fade';
import { bool, func } from 'prop-types';
import { StyledBurger } from './StyledBurger';

const MobileBurger = ({ open, setOpen }) => (
  
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <Fade cascade>
        <div></div>
        <div></div>
        <div></div>
      </Fade>
    </StyledBurger>

)

MobileBurger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default MobileBurger;