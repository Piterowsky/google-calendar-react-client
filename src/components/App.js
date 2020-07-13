import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import LoginScreen from './LoginScreen';
import Nav from './Nav';

function App() {
    const context = useContext(GoogleApiContext);

    return context.googleUser === null ? (
        <div className="App">
            <header>
                <Nav />
            </header>
        </div>
    ) : (
        <LoginScreen />
    );
}

export default App;
