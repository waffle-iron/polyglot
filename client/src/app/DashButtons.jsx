import React, { Component } from 'react';

const ENTER_LAUNCH = 'ENTER_LAUNCH';

class DashButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleTeach(e) {
    e.preventDefault();
    let teacher = true;
    let view = 1;
    let action = { type: ENTER_LAUNCH, teacher: teacher, view: view };
    this.props.store.dispatch(action);
  }

  handleLearn(e) {
    e.preventDefault();
    let teacher = false;
    let view = 1;
    let action = { type: ENTER_LAUNCH, teacher: teacher, view: view };
    this.props.store.dispatch(action);
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleTeach.bind(this) }>Teach</button>
        <button onClick={ this.handleLearn.bind(this) }>Learn</button>
      </div>
    );
  }
}

export default DashButtons;
