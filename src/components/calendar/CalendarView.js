import React from 'react';
import MonthView from './MonthView';
import DetailsView from '../event/DetailsView';
import styled from 'styled-components';
import TodayButton from './buttons/TodayButton';
import AddEventButton from './buttons/AddEventButton';
import { tablet } from '../../utils/media';

class CalendarView extends React.Component {
    state = {
        current: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        },
    };

    setCurrentDay = (year, month, day) => this.setState({ current: { year, month, day } });

    render() {
        const current = this.state.current;

        return (
            <Container>
                <MonthView date={current} setCurrentDay={this.setCurrentDay} />
                <DetailsView date={current} />
                <TodayButton setCurrentDay={this.setCurrentDay} />
                <AddEventButton />
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100%;

    & > div:first-child {
        margin-bottom: 1vmin;
    }

    @media (${tablet}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 5%;
    }
`;

export default CalendarView;
