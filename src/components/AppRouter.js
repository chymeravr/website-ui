import React from 'react'
import { Router, Route } from 'react-router'
import { Switch } from 'react-router-dom'
import 'fuckadblock'
// import 'particlesjs'
import { debug, callApiWithJwt, callRawApiWithJwt } from '../lib.js'
import ReactGA from 'react-ga'
import '../../semantic/dist/semantic.min.css';
import { Grid, Container, Message } from 'semantic-ui-react'
import { loginSucceeded } from '../redux/loginActions'
import { HomeView } from './home'
import AppView from './App'
import { ProfileView } from './profile'
import { ContactView } from './contact'
import { CareerView } from './careers'
import Login_C from './login_c'
import { TermsView } from './terms'
// import { AdvertiserView } from './advertiser/advertiser'
// import { CampaignDetailView } from './advertiser/campaignDetail'
import { AdgroupDetailView } from './advertiser/adgroupDetail'
import { PublisherHomeView } from './publisher/publisherHome'
import { AdvertiserHomeView } from './advertiser/advertiserHome'
import { PublisherView } from './publisher/publisher'
import { AppDetailView } from './publisher/appDetail'
import { createHashHistory } from 'history'
import { loginStore } from '../index'

export const hashHistory = createHashHistory();

hashHistory.listen((location, action) => {
    window.scrollTo(0, 0);
    ReactGA.set({ page: window.location.hash });
    ReactGA.pageview(window.location.hash);
});

let createHandlers = function (dispatch) {
    return {
        checkLogin: () => {
            callApiWithJwt('/user/api/view_profile',
                'GET',
                null,
                (response) => {
                    // console.info(response);
                    loginStore.dispatch(loginSucceeded(response.user.username))
                },
                (error) => { }
            );
        },
    }
}

const getRouteComponent = (path, name, child, adblock = false, transparent = false) => {
    return <Route key={path} exact path={path} render={(props) =>
        // Pass route props to all child components as well
        <AppView pathname={name} child={React.createElement(child, props)} adblock={adblock} transparent={transparent} {...props} />
    } />
}

const getRouteComponents = (args) => args.map(route => getRouteComponent.apply(null, route))

export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props = props;
        this.handlers = createHandlers(this.props.dispatch);
    }

    componentWillMount() {
        this.handlers.checkLogin();
        // var isAdBlockDetected;
        // // Function called if AdBlock is not detected
        // function adBlockNotDetected() {
        //     isAdBlockDetected = false;
        // }
        // // Function called if AdBlock is detected
        // function adBlockDetected() {
        //     isAdBlockDetected = true;
        // }

        // Recommended audit because AdBlock lock the file 'fuckadblock.js' 
        // If the file is not called, the variable does not exist 'fuckAdBlock'
        // This means that AdBlock is present
        if (typeof fuckAdBlock === 'undefined') {
            adBlockDetected();
        } else {
            fuckAdBlock.onDetected(() => this.setAdBlockStatus(true));
            fuckAdBlock.onNotDetected(() => this.setAdBlockStatus(false));
        }
    }

    setAdBlockStatus(isAdBlockDetected) {
        this.setState(Object.assign({}, this.state, { adblock: isAdBlockDetected }));
    }

    render() {
        let home = () => <AppView child={<HomeView />} />

        return (
            <Router history={hashHistory}>
                <div>
                    {// List of arguments -> (path, name, child, adblock = false, transparent = false)
                    }
                    {

                        [
                            ['/', 'home', HomeView],
                            ['/contact/', 'contact', ContactView],
                            ['/careers/', 'careers', CareerView],
                            ['/terms/', 'terms', TermsView],
                            ['/login/', 'login', Login_C, this.state.adblock],
                            ['/profile/', 'profile', ProfileView, this.state.adblock],
                            ['/advertiser/', 'advertiser', AdvertiserHomeView, this.state.adblock, true],
                            //['/dashboard/advertiser/', 'advertiserDashboard', AdvertiserView, this.state.adblock],
                            ['/dashboard/publisher/', 'publisherDashboard', PublisherView, this.state.adblock],
                            //['/advertiser/campaigns/:campaignId', 'campaignDetail', CampaignDetailView, this.state.adblock],
                            ['/advertiser/adgroups/:adgroupId', 'adgroupDetail', AdgroupDetailView, this.state.adblock],
                            ['/publisher/', 'publisher', PublisherHomeView, false, true],
                            ['/publisher/apps/:appId', 'appDetail', AppDetailView, this.state.adblock],
                        ].map(x => getRouteComponent.apply(null, x))
                    }
                </div>
            </Router>
        );
    }
}
