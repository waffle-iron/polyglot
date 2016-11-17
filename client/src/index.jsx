import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app/App';
import Splash from './app/Splash';
import Nav from './app/Nav';
import Chat from './app/Chat';


render((
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <Route path='/login/facebook' component={ Splash }/>
      <Route path='nav' component={ Nav }>
        <Route path='chat' component={ Chat }/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
