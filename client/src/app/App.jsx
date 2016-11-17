import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h3>LangGeezy</h3>
        <Link to='/splash'>Splash</Link>
        <Link to='/nav'>Nav</Link>
        {this.props.children}
      </div>

    );
  }
}

export default App;
