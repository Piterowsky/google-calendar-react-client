import React from 'react';
import { getDaysOfMonth } from '../../utils/date';
import MonthView from './MonthView';
import styled from 'styled-components';

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

        return (
            <Container>
                <MonthView date={this.state.current} />
                <Details/>
            </Container>
        );
    }
}

const Container = styled.div`

`;

const Details = styled.div`
  height: calc(50vh - 40px);
`;

export default CurrentCalendar;
