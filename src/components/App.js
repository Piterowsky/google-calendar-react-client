import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import LoginScreen from './LoginScreen';
import Nav from './Nav';
import { Route } from 'react-router-dom';
import CalendarsList from './CalendarsList';
import CurrentCalendar from './CurrentCalendar';

function App() {
    const context = useContext(GoogleApiContext);
    return context.isSignedIn() ? (
        <div className="App">
            <header>
                <Nav />
            </header>
            <main>
                <Route component={CurrentCalendar} exact path="/" />
                <Route component={CalendarsList} exact path="/calendars" />
            </main>
        </div>
    ) : (
        <LoginScreen />
    );
}

export default App;
