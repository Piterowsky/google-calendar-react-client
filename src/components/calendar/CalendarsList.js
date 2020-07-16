import React, { useContext, useEffect, useState } from 'react';
import { GoogleApiContext } from '../GoogleApi';

function CalendarsList() {
    const context = useContext(GoogleApiContext);
    const [calendars, setCalendars] = useState([]);

    useEffect(() => {
        context
            .getCalendars()
            .then((data) => setCalendars(data.map((calendar) => calendar.summary)))
            .catch((e) => {
                throw new Error(`Cannot get list of calendars, ${e}`);
            });
    }, [context]);

    return (
        <ul>
            {calendars.map((calendar, index) => (
                <li key={index}>{calendar}</li>
            ))}
        </ul>
    );
}

export default CalendarsList;
