import React, { createContext } from 'react';
import urls from '../utils/urls';
import { cloneDeep } from 'lodash';

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
        script.addEventListener('load', () => {
            const api = Object.assign({}, { ...this.state.api, gapi: window.gapi });
            this.setState({ isScriptLoaded: true, api });

            api.gapi.load('client:auth2', this.init);
        });
        return script;
    }

    updateSignInStatus = (isSignedIn) => {
        console.log(isSignedIn);
        const api = cloneDeep(this.state.api);
        api.isSignedIn = isSignedIn;
        this.setState({ api });
    };

    init = () => {
        const { gapi } = this.state.api;
        gapi.client
            .init({
                apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'https://www.googleapis.com/auth/calendar.readonly',
            })
            .then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => this.updateSignInStatus(isSignedIn));
                this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

                return true;
            })
            .catch((e) => console.error(e));
    };

    isSignedIn = () => {
        const {gapi} = this.state.api;

        if (gapi != null && gapi.auth2 != null) {
            return gapi.auth2.getAuthInstance().isSignedIn.get();
        }
        return false;
    };

    signIn = () => {
        const { gapi } = this.state.api;
        gapi.auth2.getAuthInstance().signIn();
    };

    logOut = () => {
        const { gapi } = this.state.api;
        gapi.auth2.getAuthInstance().signOut();
    };

    render() {
        const displayChildren = this.state.isScriptLoaded && this.state.animation.executed;
        const children = this.props.children;
        const context = null;

        return (
            <button onClick={this.isSignedIn() ? this.logOut : this.signIn}>
                {this.state.api.isSignedIn.toString()}
            </button>
            /*<GoogleApiContext.Provider value={context}>
                {displayChildren ? children : <LoadingComponent duration={this.state.animation.duration} />}
            </GoogleApiContext.Provider>*/
        );
    }
}

export { GoogleApiContext };
export default GoogleApi;
