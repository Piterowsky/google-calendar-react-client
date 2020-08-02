import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import LinksContainer from './LinksContainer';
import LogoContainer from './LogoContainer';
import BurgerButton from './BurgerButton';
import size from '../../utils/media';

const StyledNav = styled.nav`
    height: 100%;
    background: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-shadow: 0 0 3px #000;
    position: relative;
`;

function Nav() {
    const mobileNav = window.screen.width < size.tablet;
    const [isOpen, setIsOpen] = useState(!mobileNav);
    return (
        <StyledNav>
            <LogoContainer to="/" />
            <LinksContainer setIsOpen={setIsOpen} isOpen={mobileNav ? isOpen : true} />
            <BurgerButton id="burgerButton" setIsOpen={setIsOpen} isOpen={isOpen} />
        </StyledNav>
    );
}

export default Nav;
