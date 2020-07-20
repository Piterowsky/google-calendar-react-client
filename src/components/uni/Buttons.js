import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Button = styled.button`
    cursor: pointer;
`;

function PrimaryButton({ children, onClick }) {
    return (
        <StyledPrimaryButton onClick={onClick}>
            <div>{children}</div>
        </StyledPrimaryButton>
    );
}

const StyledPrimaryButton = styled(Button)`
    background: transparent;
    border-radius: 5px;
    border: 0.5vmin solid transparent;
    color: white;
    font-weight: bold;
    padding: 0.5vmin;
    transition: border 0.6s;

    & > div {
        padding: 1.5vmin 3.5vmin;
        height: 100%;
        width: 100%;
        background: ${colors.primaryLight};
    }

    &:active {
        background: ${colors.primaryLight};
    }

    &:hover {
        border-color: ${colors.primaryIntensive};
    }
`;

export { PrimaryButton };
