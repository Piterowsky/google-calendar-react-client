import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../utils/colors';

function LoadingComponent({ duration }) {
    return (
        <Container>
            <Spinner duration={duration} />
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
`;

const rotate = keyframes`
  0% { 
    transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% { 
    transform: translate(-50%, -50%) perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% { 
    transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const Spinner = styled('div')`
    width: 5vw;
    height: 5vw;
    background: ${colors.primaryLight};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${rotate} ${({ duration }) => duration}ms infinite;
`;

export default LoadingComponent;
