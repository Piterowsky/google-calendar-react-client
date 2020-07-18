import React from 'react';
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
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        },
    };

    setCurrentDay = (day) => {
        this.setState({ current: { ...this.state.current, day } });
    };

    render() {
        const current = this.state.current;

        return (
            <Container>
                <MonthView date={current} setCurrentDay={this.setCurrentDay} />
                <Details />
            </Container>
        );
    }
}

const Container = styled.div``;

const Details = styled.div`
    height: calc(50vh - 40px);
`;

export default CurrentCalendar;
