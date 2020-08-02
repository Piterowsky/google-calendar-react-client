import styled from 'styled-components';
import { NavLink, Link } from './Link';
import React, { useContext } from 'react';
import { GoogleApiContext } from '../GoogleApi';
import { tablet } from '../../utils/media';
import colors from '../../utils/colors';

const Container = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    z-index: 100;
    background: ${colors.primary};
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.5);

    @media (${tablet}) {
        margin-left: auto;
        height: 100%;
        display: flex;
        align-items: stretch;
    }
`;

function LinksContainer({ isOpen, setIsOpen }) {
    const context = useContext(GoogleApiContext);

    return (
        <>
            {isOpen && (
                <Container>
                    <NavLink to="/" onClick={() => setIsOpen(false)}>
                        Calendar
                    </NavLink>
                    <NavLink to="/calendars" onClick={() => setIsOpen(false)}>
                        Calendars
                    </NavLink>
                    <Link to="/" onClick={context.logOut}>
                        Logout
                    </Link>
                </Container>
            )}
        </>
    );
}

export default LinksContainer;
