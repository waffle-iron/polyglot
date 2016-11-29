import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as types from '../actionTypes.js';
import { connect } from 'react-redux';

export class ExitChat extends Component {
  constructor( props ) {
    super( props );
  }
  
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Would you chat with this person again?"
        /><br />
        <br />
        <br />
        <FlatButton
          label="Yes"
          primary={true}
          onClick={ this.props.handleYes }
        />
        <FlatButton
          label="No"
          primary={true}
          onClick={ this.props.handleNo }
        />
      </div>
    );
  }
}

const mapStateToProps = ( store ) => {
  return {
  };
};

/* eslint-disable */
const mapDispatchToProps = ( dispatch ) => {
  return {
    handleYes: (e) => {
      e.preventDefault();
      let action = { type: types.EXIT_CHAT };
      dispatch(action);
    },
    handleNo: (e) => {
      e.preventDefault();
      let action = { type: types.EXIT_CHAT };
      dispatch(action);
    }
  };
};
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)( ExitChat );
