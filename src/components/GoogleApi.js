import React, { createContext } from 'react';
import urls from '../utils/urls';
import LoadingComponent from './LoadingComponent';

const GoogleApiContext = createContext({});

class GoogleApi extends React.Component {
    state = {
        gapi: null,
        googleAuth: null,
        googleUser: null,
        isScriptLoaded: false,
        spinner: {
            isLoadingTimeoutEnded: false,
            loadingTimeout: 1000,
        },
    };

    componentDidMount() {
        const script = this.loadGoogleApisScript();
        script.addEventListener('load', () => {
            this.setState({ isScriptLoaded: true, gapi: window.gapi });
            this.init();
        });
        setTimeout(
            () => this.setState({ spinner: { isLoadingTimeoutReached: true } }),
            this.state.spinner.loadingTimeout
        );
    }

    loadGoogleApisScript() {
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
                throw new Error('Cannot load google apis script');
            }
        });
    }

    isSignedIn = () => {
        return this.state.googleAuth.isSignedIn.get();
    };

    signIn = async () => {
        const googleUser = await this.state.googleAuth.signIn();
        console.log('signIn');
        this.setState({ googleUser });
    };

    getAuthHeaders = async () => {
        if (this.state.googleUser === null) {
            await this.signIn();
        }

        const tokenType = this.state.googleUser.wc.token_type;
        const token = this.state.googleUser.wc.access_token;

        return {
            Authorization: `${tokenType} ${token}`,
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

    render() {
        const displayChildren = this.state.isScriptLoaded && this.state.spinner.isLoadingTimeoutReached;
        const children = this.props.children;
        const context = {
            ...this.state,
            isSignedIn: this.isSignedIn,
            getCalendarsList: this.getCalendarsList,
            signIn: this.signIn,
        };
        return (
            <GoogleApiContext.Provider value={context}>
                {displayChildren ? children : <LoadingComponent />}
            </GoogleApiContext.Provider>
        );
    }
}

export { GoogleApiContext };
export default GoogleApi;
