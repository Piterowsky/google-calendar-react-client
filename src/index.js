import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import './index.css';
import GoogleApiProvider from './components/GoogleApi';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <GoogleApiProvider>
            <Router>
                <AppContainer />
            </Router>
        </GoogleApiProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
