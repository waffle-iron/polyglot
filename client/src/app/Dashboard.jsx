import React, { Component } from 'react';
import { createStore } from 'redux';
import LaunchPad from './LaunchPad';
import Chat from './Chat';
import DashButtons from './DashButtons';
import $ from 'jquery';

let userId;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.store = createStore(this.reducer, { myId: '123', language: '', teacher: false, view: 0 });
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
      newState.teacher = action.teacher;
      newState.view = action.view;
    } else if ( action.type === 'EXIT_CHAT' ) {
      newState.language = '';
      newState.teacher = false;
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
