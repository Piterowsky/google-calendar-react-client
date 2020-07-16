import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import LinksContainer from './LinksContainer';
import LogoContainer from './LogoContainer';

const StyledNav = styled.nav`
    height: 80px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    box-shadow: 0 0 3px #000;
`;

function Nav() {
    return (
        <StyledNav>
            <LogoContainer to="/" />
            <LinksContainer/>
        </StyledNav>
    );
}

export default Nav;
