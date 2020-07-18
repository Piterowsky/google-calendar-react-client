import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import LoginScreen from './LoginScreen';
import Nav from './nav/Nav';
import { Route } from 'react-router-dom';
import CalendarsList from './calendar/CalendarsList';
import CurrentCalendar from './calendar/CurrentCalendar';
import styled from 'styled-components';

function App() {
    const context = useContext(GoogleApiContext);
    return context.isSignedIn() ? (
        <AppContainer className="App">
            <Header>
                <Nav />
            </Header>
            <MainContainer>
                <Route component={CurrentCalendar} exact path="/" />
                <Route component={CalendarsList} exact path="/calendars" />
            </MainContainer>
        </AppContainer>
    ) : (
        <LoginScreen />
    );
}

const Header = styled.header`
    margin-bottom: 1.5vh;
`;

const MainContainer = styled.main`
    padding: 0 1rem;
`;

const AppContainer = styled.div`
    overflow: hidden;
`;

export default App;
