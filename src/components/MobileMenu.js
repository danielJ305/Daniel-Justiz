import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './StyledMenu';

const MobileMenu = ( open ) => (
    <StyledMenu open={open} >
        <a href="/">About Me</a>
        <a href="/">Experience</a>
        <a href="/">My Work</a>
    </StyledMenu>
)

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu;