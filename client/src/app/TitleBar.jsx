import React from 'react';
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
const TitleBar = () => (
  <AppBar
    title={<span>Lang-Go</span>}
    style={styles.appBar}
  >
    <SideDrawer />
  </AppBar>
);

export default TitleBar;
