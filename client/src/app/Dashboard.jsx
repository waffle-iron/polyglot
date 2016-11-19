import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import LaunchPad from './LaunchPad';
import Chat from './Chat';
import DashButtons from './DashButtons';
import $ from 'jquery';
import Peer from 'peerjs';
import { apiKeys } from '../../../config/peerjs.config.js';

let userId;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    const logger = createLogger();
    let initialState = {
      myId: null,
      pairId: null,
      language: null,
      teacher: null,
      view: 0,
      peer: null,
    };

    this.store = createStore(this.reducer, initialState, applyMiddleware( thunk, promise, logger ));
    this.store.subscribe(this.setState.bind(this, {}));
    
    $.get('/api/users')
      .done((data) => {
        userId = data;
      });
    
  }

  reducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    if ( action.type === 'ENTER_LAUNCH' ) {
      newState.teacher = action.teacher;
      newState.view = action.view;
    } else if ( action.type === 'ENTER_CHAT' ) {
      newState.myId = action.myId;
      newState.language = action.language;
      newState.peer = new Peer(action.myId, { key: apiKeys.peerJs });
      newState.view = action.view;
    } else if ( action.type === 'EXIT_CHAT' ) {
      newState.language = null;
      newState.teacher = null;
      newState.view = action.view;
    }
    return newState;
  }

  render() {

    let viewControl = this.store.getState().view;
    let comp = null;

    if ( viewControl === 0 ) {
      comp = <DashButtons store={ this.store } />; 
    } else if ( viewControl === 1 ) {
      comp = <LaunchPad userId={ userId } store={ this.store }/>;
    } else if ( viewControl === 2 ) {
      comp = <Chat store={ this.store }/>;
    }
    
    return (
      <div>
        { comp }
      </div>
    );
  }
}

export default Dashboard;
