import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Button = styled.button`
    padding: 0.5rem 2rem;
    border-radius: 5px;
    cursor: pointer;
`;

function PrimaryButton({ children, onClick }) {
    const PrimaryButton = styled(Button)`
        background: ${colors.primary};
        border: 2px solid ${colors.primaryIntensive};
        color: white;

        &:active {
            background: ${colors.primaryIntensive};
        }
    `;

    return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
}

export { PrimaryButton };
