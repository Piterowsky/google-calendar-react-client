import styled from 'styled-components';
import React from 'react';
import { parseDate, formatDate } from '../../utils/date';
import colors from '../../utils/colors';
import { tablet } from '../../utils/media';

function Event({ event }) {
    const { summary, color } = event;

    const startDate = parseDate(event.start.dateTime);
    const endDate = parseDate(event.end.dateTime);
    return (
        <StyledEvent>
            <ColorBar color={color} />
            <Properties>
                <span className="summary">{summary ? summary : 'No title'}</span>
                <div className="labels">
                    {startDate && <span>Start: </span>}
                    {endDate && <span>End: </span>}
                </div>
                <div className="dates">
                    <span className="date">{startDate && formatDate(startDate)}</span>
                    <span className="date">{endDate && formatDate(endDate)}</span>
                </div>
            </Properties>
        </StyledEvent>
    );
}

const Properties = styled.div`
    display: grid;
    width: 100%;
    grid-template-areas:
        'summary summary summary . .'
        '. . . labels dates'
        '. . . labels dates';

    & > .labels,
    & > .dates {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
    }

    & > .labels {
        grid-area: labels;
        align-items: flex-end;
    }

    & > .dates {
        grid-area: dates;
        align-items: center;
    }

    & > .summary {
        grid-area: summary;
        margin-left: 1vmin;
        font-size: 3rem;
    }

    @media (${tablet}) {
        & > .summary {
            font-size: 2rem;
        }
        
        min-height: 12vh;
    }
`;

const ColorBar = styled.div`
    width: 2vw;
    background: ${({ color }) => color};
    border-radius: 10px 0 0 10px;
`;

const StyledEvent = styled.div`
    background: ${colors.lightgray};
    box-shadow: 0 2.5px 2.5px rgba(0, 0, 0, 0.25);
    margin-top: 2.5vmin;
    color: black;
    display: flex;
    border-radius: 10px 0 0 10px;
    height: 10%;

    &:first-child {
        margin: 0;
    }
`;

export default Event;
