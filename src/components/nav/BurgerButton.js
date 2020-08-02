import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 10px;
    width: 3em;
    height: 2.5em;
`;

const Bar = styled.div`
    position: relative;
    transform: rotate(${({ isOpen }) => (isOpen ? 45 : 0)}deg);

    &,
    &:before,
    &:after {
        height: 0.5em;
        width: 3em;
        background: white;
        transition: all 0.4s;
    }

    &::before {
        content: '';
        position: absolute;
        top: ${({ isOpen }) => (isOpen ? 0 : 1)}em;
        left: 0;
        transform: rotate(${({ isOpen }) => (isOpen ? 90 : 0)}deg);
    }

    &::after {
        content: '';
        position: absolute;
        top: ${({ isOpen }) => (isOpen ? 0 : -1)}em;
        left: 0;
        transform: rotate(${({ isOpen }) => (isOpen ? 90 : 0)}deg);
    }
`;

function BurgerButton({ isOpen, setIsOpen }) {
    return (
        <Button onClick={() => setIsOpen(!isOpen)}>
            <Bar isOpen={isOpen} />
        </Button>
    );
}

export default BurgerButton;
