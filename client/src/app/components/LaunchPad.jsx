import React, { Component } from 'react';
import * as types from '../actionTypes';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ApiServices from '../componentServices/ApiServices';

  const style = {
    textAlign: 'center',
    paddingTop: 10
  };


class LaunchPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      languages: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getLanguages = this.getLanguages.bind(this);
  }

  componentWillMount() {
    this.props.getLanguages()
    .then((languages) => { 
      this.setState({languages: languages.data});
    });
  }

  handleSubmit(e, i, value) {
    e.preventDefault();
    let language = value;
    let myId = this.props.userId;
    let action = { type: types.ENTER_CHAT, myId: myId, language: language };
    this.props.store.dispatch(action);
  }

  render() {
    return (
      <div style = {style}>
        <DropDownMenu value={this.state.value} onChange={this.handleSubmit}>
          {this.state.languages.map((lang, key)=>{
            return <MenuItem value={key} label="English" primaryText={lang} />
          })}
        </DropDownMenu>
      </div>
    );
  }
}

export default ApiServices(LaunchPad);
