import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app/App';
import Splash from './app/Splash';
import Dashboard from './app/Dashboard';
import Chat from './app/Chat';
import Profile from './app/Profile';
import fourOFour from './app/fourOFour';
import Nav from './app/Nav';

injectTapEventPlugin();


render((
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Splash }/>
      <Route path='profile' component={ Profile }/>
      <Route path='nav' component={ Dashboard }>
      </Route>
      <Route path='fourOFour' component={ fourOFour }/>
    </Route>
  </Router>
), document.getElementById('app'));
