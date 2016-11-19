import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import ApiServices from '../componentServices/ApiServices';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Splash extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    this.props.getUserId().then((id) => { console.log(id); } ); 
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
            onTouchTap={() => this.getUser()}
          />

          <RaisedButton
            label="Sign In"
            secondary
            onTouchTap={() => window.location = '/login/facebook' }
          />
        </div>
      </div>
    );
  }
}

export default ApiServices(Splash);
