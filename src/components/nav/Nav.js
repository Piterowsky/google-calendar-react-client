import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import LinksContainer from './LinksContainer';
import LogoContainer from './LogoContainer';
import BurgerButton from './BurgerButton';

const StyledNav = styled.nav`
    min-height: 100%;
    background: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-shadow: 0 0 3px #000;
    position: relative;
`;

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <StyledNav>
            <LogoContainer to="/" />
            <LinksContainer setIsOpen={setIsOpen} isOpen={isOpen} />
            <BurgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
        </StyledNav>
    );
}

export default Nav;
