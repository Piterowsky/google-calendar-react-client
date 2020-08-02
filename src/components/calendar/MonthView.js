import { getMonthOffset, getLocalizedDaysOfTheWeek, formatDate } from '../../utils/date';
import styled from 'styled-components';
import React from 'react';
import DayTile from './DayTile';
import colors from '../../utils/colors';
import { tablet } from '../../utils/media';

function MonthView({ date, setCurrentDay }) {
    const labels = getWeekDaysLabels();
    const tiles = createMonthDayTiles(date, setCurrentDay);
    const formattedDate = formatDate(new Date(date.year, date.month, date.day), false);

    return (
        <MonthViewContainer>
            <CurrentDateLabel>{formattedDate}</CurrentDateLabel>
            {labels}
            {tiles}
        </MonthViewContainer>
    );
}

function createMonthDayTiles(date, setCurrentDay) {
    let numberOfDaysToDisplay = 42;
    let offset = getMonthOffset(date.year, date.month);

    const daysNumbers = [...Array(numberOfDaysToDisplay).keys()];
    return daysNumbers.map((index) => {
        const tileDate = new Date(date.year, date.month, 1 - offset + index);
        const isSelected = date.month === tileDate.getMonth() && date.day === tileDate.getDate();
        const isNotCurrentMonth = date.month !== tileDate.getMonth();

        return (
            <DayTile
                key={Math.random()}
                date={tileDate}
                selected={isSelected}
                offsetDay={isNotCurrentMonth}
                setCurrentDay={setCurrentDay}
            />
        );
    });
}

function getWeekDaysLabels() {
    return getLocalizedDaysOfTheWeek().map((day) => (
        <WeekDayLabel key={day}>
            <span>{day}</span>
        </WeekDayLabel>
    ));
}

const MonthViewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 1fr repeat(6, 2fr);
    grid-gap: 0.5vmin;
    height: 45%;
    max-height: 45%;

    @media (${tablet}) {
        height: 80%;
        max-height: 80%;
    }
`;

const WeekDayLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CurrentDateLabel = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    display: block;
    color: ${colors.primaryIntensive};
    text-align: center;
    grid-column: span 7;
`;

export default MonthView;
