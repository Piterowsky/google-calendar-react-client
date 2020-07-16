import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .4s, border-bottom .1s;
    padding: 0 1.2rem;

    &:hover {
        background: rgba(0, 0, 0, 0.25);
        border-bottom: 5px solid #fff
    }

    &.active {
        border-bottom: 5px solid #fff
    }
`;

export default NavLink;