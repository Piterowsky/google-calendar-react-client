import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Button = styled.button`
    cursor: pointer;
`;

function PrimaryButton({ children, onClick, bgColor, borderColor, textColor }) {
    return (
        <StyledPrimaryButton onClick={onClick} bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
            <div>{children}</div>
        </StyledPrimaryButton>
    );
}

const StyledPrimaryButton = styled(Button)`
    background: transparent;
    border-radius: 5px;
    border: 0.5vmin solid transparent;
    color: ${({ textColor }) => textColor || colors.white};
    font-weight: bold;
    padding: 0.5vmin;
    transition: border 0.6s;

    & > div {
        border-radius: 2px;
        padding: 1.5vmin 3.5vmin;
        height: 100%;
        width: 100%;
        background: ${({ bgColor }) => bgColor || colors.primaryLight};
    }

    &:active {
        background: ${({ bgColor }) => bgColor || colors.primaryLight};
    }

    &:hover {
        border-color: ${({ borderColor }) => borderColor || colors.primaryIntensive};
    }
`;

export { PrimaryButton };
