import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';

function CalendarsList() {
    const context = useContext(GoogleApiContext);
    context
        .getCalendarsList()
        .then((json) => console.log({ json }))
        .catch(console.log);

    return <h1>sdsd</h1>;
}

export default CalendarsList;
