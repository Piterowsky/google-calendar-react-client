import { getCurrentMonthOffset, getDaysOfTheWeekLocalized } from '../../utils/date';
import styled from 'styled-components';
import colors from '../../utils/colors';
import React, { useState } from 'react';

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

function MonthView({ date, setCurrentDay }) {
    const labels = getWeekDaysLabels();
    const tiles = createTiles(date, setCurrentDay);

    return (
        <MonthViewContainer>
            {labels}
            {tiles}
        </MonthViewContainer>
    );
}

function DayTile({ offsetDay, selected, setCurrentDay, date }) {
    const [_date] = useState(date);
    return (
        <StyledDayTile
            onClick={() => setCurrentDay(date.getFullYear(), date.getMonth(), date.getDate())}
            offsetDay={offsetDay}
            selected={selected}
        >
            <span className="day">{_date.getDate()}</span>
        </StyledDayTile>
    );
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
    height: calc(50vh - 40px);
`;

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
`;

const WeekDayLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default MonthView;
