import React, { Component } from 'react';
import { Link } from 'react-router';
import Dashboard from './Dashboard';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDashboard: false,
      learnLanguages: ['spanish', 'chinese'],
      teachLanguages: ['english'],
    };

  }

  render() {

    const learn = this.state.learnLanguages.map((lang) => {
      return <li>{lang}</li>;
    });

    const teach = this.state.teachLanguages.map((lang) => {
      return <li>{lang}</li>;
    });

    return (
      <div>
        <h3>Profile</h3>
        <h4>Id</h4>
        <input type='form'></input>
        <input type='submit'></input>
        <h4>Learning Languages</h4>
          <ul>
            {learn}
          </ul>
        <h4>Teaching Languages</h4>
          <ul>
            {teach}
          </ul>
        <Link to='/dashboard'><button>Save</button></Link>
      </div>
    );
  }
}

export default Profile;
