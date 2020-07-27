import React from 'react';
import MonthView from './MonthView';
import DetailsView from '../event/DetailsView';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { formatDate } from '../../utils/date';

class CalendarView extends React.Component {
    viewModes = {
        day: 'DAY',
        month: 'MONTH',
        year: 'YEAR',
    };

    state = {
        viewMode: this.viewModes.month,
        current: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        },
    };

    getCurrentDate = () => {
        const { year, month, day } = this.state.current;
        return new Date(year, month, day);
    };

    setCurrentDay = (year, month, day) => {
        const current = {
            year,
            month,
            day,
        };
        this.setState({ current });
    };

    render() {
        const current = this.state.current;

        const currentDateLabel = formatDate(this.getCurrentDate(), false);

        return (
            <Container>
                <CurrentDateLabel>{currentDateLabel}</CurrentDateLabel>
                <MonthView date={current} setCurrentDay={this.setCurrentDay} />
                <DetailsView date={current} />
                <TodayButton setCurrentDay={this.setCurrentDay} />
                <AddEventButton />
            </Container>
        );
    }
}

function TodayButton({ setCurrentDay }) {
    const today = new Date();
    const handleClick = () => setCurrentDay(today.getFullYear(), today.getMonth(), today.getDate());
    return (
        <StyledRoundedButton onClick={handleClick} bottom="1vmin" right="1vmin">
            <div>Today</div>
        </StyledRoundedButton>
    );
}

function AddEventButton() {
    const handleClick = () => console.log('Adding event');
    return (
        <StyledRoundedButton onClick={handleClick} bottom="1vmin" right="18vmin">
            <div>+</div>
        </StyledRoundedButton>
    );
}

const StyledRoundedButton = styled.button`
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

const CurrentDateLabel = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    color: ${colors.primaryIntensive};
    text-align: center;
`;

const Container = styled.div`
    & > div:first-child {
        margin-bottom: 1vmin;
    }
`;

export default CalendarView;
