import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { Link, NavLink } from "react-router-dom";

const StyledNav = styled.nav`
    height: 80px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0 0 3px #000;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    padding: 0 1.2rem;

    &:hover {
        background: rgba(0, 0, 0, 0.25);
    }

    &.active {
        color: ${colors.lightblue};
    }
`;

const LinksContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const LogoContainer = styled(Link)`
    width: 40%;
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
        width: 50px;
        height: 50px;
        transition: transform 0.8s;
    }

    & > .logo-img:first-child {
        margin-right: 1.1rem;
    }

    &:hover > .logo-img {
        transform: rotate(360deg);
    }
`;

function Nav() {
    return(
        <StyledNav>
            <LogoContainer to="/">
                <img className="logo-img" alt="logo" src={window.location.origin + '/logo.svg'} />
                <span className="logo-text">Calendar Web Client</span>
            </LogoContainer>
            <LinksContainer>
                <StyledNavLink to="/calendars">Calendars</StyledNavLink>
                <StyledNavLink to="/some">Some</StyledNavLink>
                <StyledNavLink to="/links">Links</StyledNavLink>
            </LinksContainer>
        </StyledNav>
    )
}

export default Nav;