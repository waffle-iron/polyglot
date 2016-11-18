import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app/App';
import Splash from './app/Splash';
import Dashboard from './app/Dashboard';
import Chat from './app/Chat';
import Profile from './app/Profile';
import Nav from './app/Nav';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


render((
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Splash }/>
      <Route path='profile' component={ Profile }/>
      <Route path='nav' component={ Dashboard }>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
