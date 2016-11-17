import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { indigo500 } from 'material-ui/styles/colors';
import SideDrawer from './SideDrawer';


const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
    backgroundColor: indigo500,
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
// const Nav = () => (
//   <AppBar
//     title={<span>Lang-Go</span>}
//     style={styles.appBar}
//   >
//     <SideDrawer />
//   </AppBar>
// );

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>BOATS 'N HOES</h1>
        <Link to='/nav/chat'>Chat</Link>
        <Link to='/nav/dash'>Dash</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Nav;
