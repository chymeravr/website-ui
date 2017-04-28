import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { AppRouter } from './components/AppRouter';
import { Provider } from 'react-redux'
import { createStore, store } from 'redux'
import loginApp from './redux/loginReducers'
import { Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import { connect } from 'react-redux'

export const loginStore = createStore(loginApp)

ReactGA.initialize('UA-89829978-1');


ReactDOM.render((
  <AppContainer>
    <Provider store={loginStore}>
      <AppRouter />
    </Provider >
  </AppContainer>

), document.getElementById('root'))


if (module.hot) {
  module.hot.accept()
}
