import React, { Component } from 'react';
import { Link } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { indigo500 } from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
// import AppBar from './AppBar';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import LearningChips from './LearningChips';

// import SelectableLanguages from './SelectableLanguages';
const style = {
  container: {
    textAlign: 'center',
    margin: 'auto',
  },
  navContainer:{
    textAlign: 'center',
  }
};

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

    const learn = this.state.learnLanguages.map((lang, key) => {
      return <ListItem key={ key } primaryText={lang} />;
    });

    const teach = this.state.teachLanguages.map((lang, key) => {
      return <ListItem key={ key } primaryText={lang} />;
    });

    return (
      <div>
        <div style={ style.navContainer }>
          <NavBar />
        </div>
        <div style={style.container}>
          <h3>Profile</h3>
          <Link to='/dashboard'><RaisedButton label="Save" primary></RaisedButton></Link>
          <br />
          <h4>Learning Languages</h4>
          <LearningChips />
          <h4>Teaching Languages</h4>
          <List>
            {teach}
          </List>
        <h4>New Language</h4>
          <TextField
            inputStyle={style.container}>
          </TextField>
          <br />
          <RaisedButton
            label="Add"
            primary
          />
        </div>
      </div>
    );
  }
}

export default Profile;
