import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = styled(RouterNavLink)`
    display: block;
    min-height: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.4s, border-bottom 0.1s;
    padding: 0 1.2rem;

    &:hover {
        background: rgba(0, 0, 0, 0.25);
        border-bottom: 5px solid #fff;
    }

    &.active {
        border-bottom: 5px solid #fff;
    }
`;

export default NavLink;
