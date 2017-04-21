import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './components/AppRouter';
import { HomeView } from './components/home'
import Header_C from './components/header_c'
import Footer from './components/footer'
import { ProfileView } from './components/profile'
import { ContactView } from './components/contact'
import { CareerView } from './components/careers'
import Login_C from './components/login_c'
import { TermsView } from './components/terms'
import { AdvertiserView } from './components/advertiser/advertiser'
import { CampaignDetailView } from './components/advertiser/campaignDetail'
import { AdgroupDetailView } from './components/advertiser/adgroupDetail'
import { PublisherHomeView } from './components/publisher/publisherHome'
import { AdvertiserHomeView } from './components/advertiser/advertiserHome'
import { PublisherView } from './components/publisher/publisher'
import { AppDetailView } from './components/publisher/appDetail'
import { Provider } from 'react-redux'
import { createStore, store } from 'redux'
import loginApp from './redux/loginReducers'
import { Route, Router, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import { connect } from 'react-redux'

export const loginStore = createStore(loginApp)

ReactGA.initialize('UA-89829978-1');

const render = Component =>
  ReactDOM.render((
    <AppContainer>
      <Provider store={loginStore}>
        <Component />
      </Provider >
    </AppContainer>

  ), document.getElementById('root'))

render(AppRouter);

if (module.hot) {
  module.hot.accept()
}
