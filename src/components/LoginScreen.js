import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import { PrimaryButton } from './uni/Buttons';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

function LoginScreen() {
    const context = useContext(GoogleApiContext);

    const handleLogin = () => context.signIn()
    return (
        <Container>
            <h1>Calendar Web Client</h1>
            <PrimaryButton onClick={() => handleLogin()}>Login</PrimaryButton>
        </Container>
    );
}

export default LoginScreen;
