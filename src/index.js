import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoogleApiProvider from './components/GoogleApi';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
    <React.StrictMode>
        <GoogleApiProvider>
            hello
            {/*<Router>
                <App />
            </Router>*/}
        </GoogleApiProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
