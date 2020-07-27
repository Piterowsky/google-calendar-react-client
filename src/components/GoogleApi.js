import React, { createContext } from 'react';
import urls from '../utils/urls';
import { cloneDeep } from 'lodash';
import LoadingComponent from './LoadingComponent';

const GoogleApiContext = createContext({});

class GoogleApi extends React.Component {
    state = {
        isScriptLoaded: false,
        animation: {
            id: null,
            duration: 1000,
            executed: false,
        },
        api: {
            gapi: null,
            auth: null,
            user: null,
            isSignedIn: false,
        },
    };

    componentDidMount() {
        this.createGoogleScriptElement();
        this.setAnimationTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this.state.animation.id);
    }

    setAnimationTimeout() {
        const timeoutId = setTimeout(() => {
            const animation = cloneDeep(this.state.animation);
            animation.executed = true;
            this.setState({ animation });
        }, this.state.animation.duration);

        const animation = cloneDeep(this.state.animation);
        animation.id = timeoutId;
        this.setState({ animation });
    }

    createGoogleScriptElement() {
        const script = document.createElement('script');
        script.src = urls.google.apisGoogleScript;
        document.head.appendChild(script);
        script.addEventListener('load', this.onScriptLoadHandler);
        return script;
    }

    onScriptLoadHandler = () => {
        const api = cloneDeep(this.state.api);
        api.gapi = window.gapi;
        api.gapi.load('client:auth2', this.init);
        this.setState({ isScriptLoaded: true, api });
    };

    init = async () => {
        try {
            const { gapi } = this.state.api;

            const auth = await gapi.auth2.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'https://www.googleapis.com/auth/calendar',
            });

            auth.isSignedIn.listen((isSignedIn) => this.updateSignInStatus(isSignedIn));
            this.updateSignInStatus(auth.isSignedIn.get());

            this.setState({ api: { ...this.state.api, auth } });
        } catch (e) {
            throw new Error(`Cannot connect with google calendar API. ${e}`);
        }
    };

    async getAuthInstance() {
        const { gapi } = this.state.api;
        return await gapi.auth2.getAuthInstance();
    }

    async getCurrentUser() {
        const authInstance = await this.getAuthInstance();
        return authInstance.currentUser.get();
    }

    updateSignInStatus = (isSignedIn) => {
        this.setState({ api: { ...this.state.api, isSignedIn } });
    };

    isSignedIn = () => {
        const auth = this.state.api.auth;
        return auth && auth.isSignedIn.get();
    };

    signIn = async () => {
        const { auth } = this.state.api;
        await auth.signIn();
    };

    logOut = async () => {
        const { auth } = this.state.api;
        await auth.signOut();
        this.updateSignInStatus(auth.isSignedIn.get());
    };

    async getToken() {
        const user = await this.getCurrentUser();
        const { token_type, access_token } = user.wc;
        return [token_type, access_token];
    }

    getCalendarsList = async () => {
        const [tokenType, token] = await this.getToken();
        const response = await fetch(urls.google.getCalendars, {
            headers: {
                Authorization: `${tokenType} ${token}`,
            },
        });
        const json = await response.json();
        return json.items;
    };

    getEvents = async (calendarId, dateMin, dateMax) => {
        const url = new URL(urls.google.getEvents.replace('calendarId', calendarId));
        url.search = new URLSearchParams({
            timeMin: dateMin,
            timeMax: dateMax,
        });
        const [tokenType, token] = await this.getToken();
        const response = await fetch(url, {
            headers: {
                Authorization: `${tokenType} ${token}`,
            },
        });

        const json = await response.json();
        return json.items;
    };

    render() {
        const displayChildren = this.state.isScriptLoaded && this.state.animation.executed;
        const children = this.props.children;
        const context = {
            logOut: this.logOut,
            signIn: this.signIn,
            isSignedIn: this.isSignedIn,
            getCalendarsList: this.getCalendarsList,
            getEvents: this.getEvents,
        };

        return (
            <GoogleApiContext.Provider value={context}>
                {displayChildren ? children : <LoadingComponent duration={this.state.animation.duration} />}
            </GoogleApiContext.Provider>
        );
    }
}

export { GoogleApiContext };
export default GoogleApi;
