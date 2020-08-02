import styled from 'styled-components';
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom';
import { tablet } from '../../utils/media';
import colors from '../../utils/colors';

const LinkStyles = () => `
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.4s, border-bottom 0.1s;
    padding: 2rem 1.2rem;

    &.active {
        border-bottom: none;
        color: ${colors.white};
    }
    
    &:hover {
       background: ${colors.primaryIntensive}
    }
    
    @media (${tablet}) {
        &.active {
            border-bottom: 5px solid #fff;
        }
        
        &:hover {
            background: rgba(0, 0, 0, 0.25);
            border-bottom: 5px solid #fff;
        }
    }
    `;

const NavLink = styled(RouterNavLink)`
    ${LinkStyles};
`;

const Link = styled(RouterLink)`
    ${LinkStyles};
`;

export { NavLink, Link };
