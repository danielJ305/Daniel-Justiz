import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import MobileBurger from './MobileBurger';
import MobileMenu from './MobileMenu';

const MobileBurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <MobileBurger 
                open={open}
                setOpen={setOpen}
            />
            <MobileMenu
                open={open}
            />
        </div>
    )
    
    
}

export default MobileBurgerMenu;