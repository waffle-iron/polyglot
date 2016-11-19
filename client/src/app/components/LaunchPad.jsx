import React, { Component } from 'react';
import * as types from '../actionTypes';

class LaunchPad extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let language = document.getElementById('language').value;
    let view = 2;
    let myId = this.props.userId;
    let action = { type: types.ENTER_CHAT, myId: myId, language: language, view: view };
    this.props.store.dispatch(action);
  }

  render() {
    return (
      <div>
        <h3>Dash is live</h3>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <select id='language'>
            <option value='English'>English</option>
            <option value='Spanish'>Spanish</option>
            <option value='Mandarin'>Mandarin</option>
            <option value='Italian'>Italian</option>
            <option value='French'>French</option>
            <option value='Hindi'>Hindi</option>
            <option value='Arabic'>Arabic</option>
            <option value='Portuguese'>Portuguese</option>
            <option value='Russian'>Russian</option>
            <option value='Japanese'>Japanese</option>
          </select>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default LaunchPad;
