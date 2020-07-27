import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const Container = styled(Link)`
    margin-left: 0;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    color: #fff;
    cursor: pointer;
    text-decoration: none;

    & > .logo-text {
        font-family: 'Roboto', serif;
        font-weight: 500;
    }

    & > .logo-img {
        width: 5vmin;
        max-width: 50px;
        height: 5vmin;
        max-height: 50px;
        transition: transform 0.8s;
    }

    & > .logo-img:first-child {
        margin-right: 1.1rem;
    }

    &:hover > .logo-img {
        transform: rotate(360deg);
    }
`;

function LogoContainer({ to }) {
    return (
        <Container to={to}>
            <img className="logo-img" alt="logo" src={window.location.origin + '/logo.svg'} />
            <span className="logo-text">Calendar Web Client</span>
        </Container>
    );
}

export default LogoContainer;
