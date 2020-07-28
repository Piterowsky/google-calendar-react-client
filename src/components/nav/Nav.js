import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import LinksContainer from './LinksContainer';
import LogoContainer from './LogoContainer';

const StyledNav = styled.nav`
    min-height: 100%;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    padding: 0 2%;
    box-shadow: 0 0 3px #000;
`;

function Nav() {
    return (
        <StyledNav>
            <LogoContainer to="/" />
            <LinksContainer />
        </StyledNav>
    );
}

export default Nav;
