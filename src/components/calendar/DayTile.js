import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

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

const StyledDayTile = styled.div`
    position: relative;
    padding: 0;
    background: ${({ offsetDay }) => (offsetDay ? colors.primaryIntensive : colors.primary)};
    border: ${({ selected }) => (selected ? `1vmin solid ${colors.blue}` : 'none')};
    cursor: pointer;
    transition: border .25s;

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

    &:hover {
      border: 1vmin solid ${colors.lightblue}
    }
`;

export default DayTile;
