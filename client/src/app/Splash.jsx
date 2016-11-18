import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const Splash = () => (
  <div style={styles.container}>
    <h1>Lango</h1>
    <h2>learn from native speakers</h2>
    <div>
      <RaisedButton
        label="Sign In"
        secondary
        onTouchTap={() => window.location = '/login/facebook' }
      />
    </div>
  </div>
);

export default Splash;
