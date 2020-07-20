import styled from 'styled-components';
import NavLink from './NavLink';
import { PrimaryButton } from '../uni/Buttons';
import React, { useContext } from 'react';
import { GoogleApiContext } from '../GoogleApi';
import colors from '../../utils/colors';

const Container = styled.div`
    margin-left: auto;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

function LinksContainer() {
    const context = useContext(GoogleApiContext);
    return (
        <Container>
            <NavLink to="/calendars">Calendars</NavLink>
            <NavLink to="/some">Some</NavLink>
            <NavLink to="/links">Links</NavLink>
            <PrimaryButton
                onClick={context.logOut}
                bgColor={colors.white}
                textColor={colors.primaryLight}
                borderColor={colors.white}
            >
                Logout
            </PrimaryButton>
        </Container>
    );
}

export default LinksContainer;
