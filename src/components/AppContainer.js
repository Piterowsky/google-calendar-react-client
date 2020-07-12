import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import LoginScreen from './LoginScreen';
import colors from '../utils/colors';
import styled from 'styled-components';

function AppContainer() {
    const context = useContext(GoogleApiContext);
    return <div className="AppContainer">{context.googleUser !== null ? <App /> : <LoginScreen />}</div>;
}

const Nav = styled.nav`
    height: 80px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
`;

function App() {
    return <Nav />;
}

export default AppContainer;
