import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
<<<<<<< 24979bf44f095234f18d1a34bc8c271707d6160d:client/src/app/components/Splash.jsx
import ApiServices from '../componentServices/ApiServices';
=======
// import Promise from 'redux-promise';
import ApiServices from './componentServices/ApiServices';
>>>>>>> front end redirect on auth and serv side route connects:client/src/app/Splash.jsx

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
<<<<<<< 24979bf44f095234f18d1a34bc8c271707d6160d:client/src/app/components/Splash.jsx

  getUser() {
    this.props.getUserId().then((id) => { console.log(id); } ); 
=======
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
        console.log('=========', id);
        if (id > 0) {
          console.log('then=====3')
          browserHistory.push('dashboard');
        } else {
          browserHistory.push('fourOFour');
        }
      }) 
    })
>>>>>>> front end redirect on auth and serv side route connects:client/src/app/Splash.jsx
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
            onTouchTap={() => this.handleEnter() }/>
  t      </div>
      </div>
    );
  }
}

export default ApiServices(Splash);
