import styled from 'styled-components';
import colors from '../../../utils/colors';

const RoundedButton = styled.button`
    border-radius: 50%;
    background: transparent;
    position: absolute;
    height: 15vmin;
    width: 15vmin;
    bottom: ${({ bottom }) => bottom};
    right: ${({ right }) => right};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1vmin solid transparent;
    transition: border 1s;
    cursor: pointer;

    &:hover {
        border: 1vmin solid ${colors.primaryLight};
    }

    & > div {
        border-radius: 50%;
        color: ${colors.white};
        background: ${colors.primaryLight};
        height: 90%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default RoundedButton;
