import React, { useState } from 'react';
import { getDaysOfMonth } from '../../utils/date';
import MonthView from './MonthView';

function CurrentCalendar() {
    return <CalendarView />;
}

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
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
        },
    };

    render() {
        const current = this.state.current;
        const daysOfMonth = getDaysOfMonth(current.year, current.month);

        return <MonthView days={daysOfMonth} />;
    }
}

export default CurrentCalendar;
