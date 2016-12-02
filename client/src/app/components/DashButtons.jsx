import React, { Component } from 'react';
import * as types from '../actionTypes.js';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const style = {
  container: {
    display: 'flex', 
    justifyContent: 'center',
  },
  menuItem: {
    fontSize: '180%', 
  }
};


const mapStateToProps = ( store ) => {
  return {
    view: store.view
  };
};

/* eslint-disable */
const mapDispatchToProps = ( dispatch ) => {
  return {
    handleTeach: (e) => {
      e.preventDefault();
      let teacher = true;
      let action = { type: types.ENTER_LAUNCH, teacher: teacher };
      dispatch(action);
    },
    handleLearn: (e) => {
      e.preventDefault();
      let teacher = false;
      let action = { type: types.ENTER_LAUNCH, teacher: teacher };
      dispatch(action);
    },
    handleCards: (e) => {
      e.preventDefault();
      let action = { type: types.ENTER_CARDS };
      dispatch(action);
    }
  };
};
/* eslint-enable */
export class DashButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div style={style.container}>
        <Menu desktop={true}>      
          <MenuItem 
          style={style.menuItem} 
          primaryText="Teach"
          onTouchTap={ this.props.handleTeach.bind(this) } />      
          <Divider />
          <MenuItem 
          style={style.menuItem} 
          primaryText="Learn" 
          onTouchTap={ this.props.handleTeach.bind(this) } />
        </Menu>                
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashButtons);
