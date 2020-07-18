import { getCurrentMonthLength, getCurrentMonthOffset, getDaysOfTheWeekLocalized } from '../../utils/date';
import styled from 'styled-components';
import colors from '../../utils/colors';
import React from 'react';
import device from '../../utils/media';

function MonthView({ date, setCurrentDay }) {
    const labels = getWeekDaysLabels();

    const lastMonthTiles = getLastMonthDaysOffsetTiles(date.year, date.month);
    const currentMonthTiles = getCurrentMonthDaysTiles(date.year, date.month, date.day);
    const nextMonthTiles = getNextMonthDaysTiles(date.year, date.month);

    const allTiles = [...lastMonthTiles, ...currentMonthTiles, ...nextMonthTiles];
    return (
        <MonthViewContainer>
            {labels}
            {allTiles}
        </MonthViewContainer>
    );
}

function getWeekDaysLabels() {
    return getDaysOfTheWeekLocalized().map((day) => (
        <WeekDayLabel key={day}>
            <span>{day}</span>
        </WeekDayLabel>
    ));
}

function getCurrentMonthDaysTiles(year, month, selectedDay) {
    const daysNumber = getCurrentMonthLength(year, month);
    const days = [...Array(daysNumber).keys()].map((day) => day + 1);

    return days.map((day) => {
        const selected = selectedDay === day;
        return (
            <DayTile key={Math.random()} selected={selected}>
                <span className="day">{day}</span>
            </DayTile>
        );
    });
}

function getLastMonthDaysOffsetTiles(year, month) {
    const offset = getCurrentMonthOffset(year, month);

    const days = [...Array(offset).keys()].map((index) => new Date(year, month, 0 - index).getDate());
    return days.map((day) => (
        <DayTile offsetDay key={Math.random()}>
            <span className="day">{day}</span>
        </DayTile>
    ));
}

function getNextMonthDaysTiles(year, month) {
    const currentMonthOffset = getCurrentMonthOffset(year, month);
    const currentMonthLength = getCurrentMonthLength(year, month);
    const maximumNumberOfDaysToDisplay = 42;

    const nextMonthDaysToDisplay = maximumNumberOfDaysToDisplay - (currentMonthLength + currentMonthOffset);

    return [...Array(nextMonthDaysToDisplay).keys()].map((day) => (
        <DayTile offsetDay key={Math.random()}>
            <span className="day">{day}</span>
        </DayTile>
    ));
}

const MonthViewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr repeat(6, 5fr);
    grid-gap: 0.5vmin;
    height: calc(50vh - 40px);
`;

function DayTile({ children, offsetDay, selected, setCurrentDate }) {
    return (
        <StyledDayTile onClick={setCurrentDate} offsetDay={offsetDay} selected={selected}>
            {children}
        </StyledDayTile>
    );
}

const StyledDayTile = styled.div`
    position: relative;
    padding: 0;
    background: ${({ offsetDay }) => (offsetDay ? colors.primaryIntensive : colors.primary)};
    border: ${({ selected }) => (selected ? `1vmin solid ${colors.lightblue}` : 'none')};
    cursor: pointer;

    & > .day {
        font-size: 2rem;
        font-weight: bold;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        color: ${({ offsetDay }) => (offsetDay ? colors.lightgray : colors.white)};
        transform: translate(-50%, -50%);
        user-select: none;
    }

    @media ${device.laptop} {
        filter: blur(1px);
    }
`;

const WeekDayLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default MonthView;
