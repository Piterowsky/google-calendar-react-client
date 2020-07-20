import React from 'react';
import MonthView from './MonthView';
import DetailsView from "../event/DetailsView";
import styled from "styled-components";

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

    setCurrentDay = (year, month, day) => {
        const current = {
            year,
            month,
            day,
        };
        this.setState({ current });
    };

    render() {
        const current = this.state.current;

        return (
            <Container>
                <MonthView date={current} setCurrentDay={this.setCurrentDay} />
                <DetailsView date={current} />
            </Container>
        );
    }
}

const Container = styled.div`
  & > div:first-child {
    margin-bottom: 1vmin;
  }
`;

export default CalendarView;
