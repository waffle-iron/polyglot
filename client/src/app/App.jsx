import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3>LangGeezy</h3>
        <button onClick={() => window.location = '/login/facebook' }>SignIn</button>
        <Link to='/splash'>Splash</Link>
        <Link to='/nav'>Nav</Link>
        <Link to='/profile'>Profile</Link>
        {this.props.children}
      </div>

    );
  }
}

export default App;
