import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import ApiServices from './componentServices/ApiServices';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};
class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter() {
    new Promise(resolve => {
      var auth = () => {
        return window.location = '/login/facebook';
      }  
      resolve(auth());
    })
    .then(()=> {
      this.props.getUserId().then((user) => { 
        var id = user.data;
        if (id > 0) {
          browserHistory.push('dashboard');
        } else {
          browserHistory.push('fourOFour');
        }
      }); 
    });
  }
  
  render () {
    return (
      <div style={styles.container}>
        <h1>Lango</h1>
        <h2>learn from native speakers</h2>
        <div>
          <RaisedButton
            label="Sign In"
            secondary
            onTouchTap={ () => this.handleEnter() }/>
          </div>
      </div>
    );
  }
}

export default ApiServices(Splash);