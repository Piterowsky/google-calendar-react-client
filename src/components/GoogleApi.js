import React, { createContext } from 'react';
import urls from '../utils/urls';
import LoadingComponent from './LoadingComponent';

const GoogleApiContext = createContext({});

class GoogleApi extends React.Component {
    GOOGLE_USER_KEY = 'googleUser';

    state = {
        gapi: null,
        googleAuth: null,
        googleUser: null,
        isScriptLoaded: false,
    };

    componentDidMount() {
        this.onGoogleScriptLoadListener();
    }

    onGoogleScriptLoadListener() {
        const script = this.createGoogleScriptElement();
        script.addEventListener('load', () => {
            this.setState({ isScriptLoaded: true, gapi: window.gapi });
            this.init();
        });
    }

    createGoogleScriptElement() {
        const script = document.createElement('script');
        script.src = urls.google.apisGoogleScript;
        document.head.appendChild(script);
        return script;
    }

    init() {
        this.state.gapi.load('auth2', async () => {
            try {
                const googleAuth = await this.state.gapi.auth2.init({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                });
                this.setState({ googleAuth });
            } catch (e) {
                throw new Error(`Cannot load google apis script: ${e}`);
            }
        });
    }

    isSignedIn = () => {
        return this.state.googleAuth.isSignedIn().get();
    };

    signIn = async () => {
        const googleUser = await this.state.googleAuth.signIn();
        this.setGoogleUser(googleUser);
        this.setState({ googleUser });
    };

    logOut = async () => {
        this.setState({ googleUser: null });
        localStorage.removeItem(this.GOOGLE_USER_KEY);
    };

    getAuthHeaders = async () => {
        if (!this.isSignedIn()) {
            await this.signIn();
        }

        const { token_type, access_token } = this.getGoogleUser().wc;

        return {
            Authorization: `${token_type} ${access_token}`,
        };
    };

    getCalendarsList = async () => {
        const authHeaders = this.getAuthHeaders();
        const response = await fetch(urls.google.getCalendars, {
            headers: { ...authHeaders },
        });

        const json = await response.json();
        return json.items;
    };

    combineContext() {
        return {
            ...this.state,
            isSignedIn: this.isSignedIn,
            getCalendarsList: this.getCalendarsList,
            signIn: this.signIn,
            logOut: this.logOut,
        };
    }

    getGoogleUser() {
        return JSON.parse(localStorage.getItem(this.GOOGLE_USER_KEY));
    }

    setGoogleUser(googleUser) {
        localStorage.setItem(this.GOOGLE_USER_KEY, JSON.stringify(googleUser));
    }

    render() {
        const displayChildren = this.state.isScriptLoaded;
        const children = this.props.children;
        const context = this.combineContext();

        return (
            <GoogleApiContext.Provider value={context}>
                {displayChildren ? children : <LoadingComponent />}
            </GoogleApiContext.Provider>
        );
    }
}

export { GoogleApiContext };
export default GoogleApi;
