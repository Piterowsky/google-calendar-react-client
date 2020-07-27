import { getCurrentMonthOffset, getDaysOfTheWeekLocalized, formatDate } from '../../utils/date';
import styled from 'styled-components';
import React from 'react';
import DayTile from './DayTile';
import colors from '../../utils/colors';

function MonthView({ date, setCurrentDay }) {
    const labels = getWeekDaysLabels();
    const tiles = createTiles(date, setCurrentDay);
    const currentDateLabel = formatDate(new Date(date.year, date.month, date.day), false);

    return (
        <>
            <CurrentDateLabel>{currentDateLabel}</CurrentDateLabel>
            <MonthViewContainer>
                {labels}
                {tiles}
            </MonthViewContainer>
        </>
    );
}

function createTiles(date, setCurrentDay) {
    let numberOfDaysToDisplay = 42;
    let offset = getCurrentMonthOffset(date.year, date.month);

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
    return getDaysOfTheWeekLocalized().map((day) => (
        <WeekDayLabel key={day}>
            <span>{day}</span>
        </WeekDayLabel>
    ));
}

const MonthViewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr repeat(6, 5fr);
    grid-gap: 0.5vmin;
    height: calc(48vh - 40px);
`;

const WeekDayLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CurrentDateLabel = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    height: 4vh;
    display: block;
    color: ${colors.primaryIntensive};
    text-align: center;
`;

export default MonthView;
