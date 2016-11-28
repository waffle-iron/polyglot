import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import * as types from '../actionTypes';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import ApiServices from '../componentServices/ApiServices';
import LaunchPad from './LaunchPad';
import Chat from './Chat';
import Cards from './Cards';
import DashButtons from './DashButtons';
import dashReducer from '../reducers/Dashboard';
import AppBar from 'material-ui/AppBar';
import SideDrawer from './SideDrawer';
import { connect } from 'react-redux';
import MedalBadge from '../components/MedalBadge';
import axios from 'axios';

let userId;

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
  }
};

// look for reducer not found error
export class Dashboard extends Component {
  constructor(props) {
    super(props);

    axios.get('/api/users')
      .then((resp) => {
        this.props.sendId( resp.data );
      });
  }

  /* eslint-disable */
  reDirect() {
    return <Link to='/dashboard'><button>Save</button></Link>
  }

  render() {
    let viewControl = this.props.view;
    let comp = null;

    if ( viewControl === 0 ) {
      comp = <DashButtons/>
    } else if ( viewControl === 1 ) {
      comp = <LaunchPad myId={ userId }/>
    } else if ( viewControl === 2 ) {
      comp = <Chat/>
    } else if ( viewControl === 3 ) {
      comp = <Cards/>
    }

    /* eslint-enable */ 

    return (
      <div>
        <AppBar
          title="Lango"
          titleStyle={{ textAlign: 'center' }}
          showMenuIconButton={false}>
          <MedalBadge />
          <SideDrawer />
        </AppBar>
        <div style={styles.container}>
          { comp }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( store ) => {
  return {
    view: store.view
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    sendId: ( newId ) => {
      let action = { type: types.GET_ID, myId: newId };
      dispatch(action);
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);
