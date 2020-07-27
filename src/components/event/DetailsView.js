import React, { useContext, useEffect, useState } from 'react';
import { GoogleApiContext } from '../GoogleApi';
import styled from 'styled-components';
import LoadingComponent from '../LoadingComponent';
import Event from './EventTile';

function DetailsView({ date }) {
    const [events, setEvents] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(GoogleApiContext);

    useEffect(() => getEventsOfCurrentDay(context, date, setEvents, setIsLoading), [date, context]);

    const eventsTiles = createEvents(events);

    return (
        <StyledEventsContainer id="eventsContainer">
            {isLoading ? <LoadingComponent /> : <Events>{eventsTiles}</Events>}
        </StyledEventsContainer>
    );
}

function getEventDates(date) {
    const dateMin = new Date(date.year, date.month, date.day).toISOString();
    const dateMax = new Date(date.year, date.month, date.day + 1).toISOString();
    return { dateMin, dateMax };
}

async function getEventsOfAllCalendars(context, dateMin, dateMax) {
    const result = [];
    const getCalendarsResult = await context.getCalendarsList();
    const calendars = getCalendarsResult.map((calendar) => ({
        id: calendar.id,
        color: calendar.backgroundColor,
    }));

    for (const calendar of calendars) {
        const events = await context.getEvents(calendar.id, dateMin, dateMax);
        if (events) {
            events.forEach((event) => (event.color = calendar.color));
            result.push(...events);
        }
    }

    return result;
}

function getEventsOfCurrentDay(context, date, setEvents, setIsLoading) {
    setIsLoading(true);
    (async function () {
        const { dateMin, dateMax } = getEventDates(date);
        const events = await getEventsOfAllCalendars(context, dateMin, dateMax);

        setEvents(events);
        setIsLoading(false);
    })();
}

function createEvents(events) {
    return events ? events.map((event) => <Event key={Math.random()} event={event} />) : [];
}

const Events = styled.div`
    padding-bottom: 100px;
`;

const StyledEventsContainer = styled.div`
    height: calc(48vh - 40px);
    max-height: calc(48vh - 40px);
    overflow-y: scroll;
    position: relative;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default DetailsView;
