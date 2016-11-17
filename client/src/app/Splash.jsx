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

// class Splash extends Component {
//   constructor(props) {
//     super(props);

//     this.handleRequestClose = this.handleRequestClose.bind(this);
//     this.handleTouchTap = this.handleTouchTap.bind(this);

//     this.state = {
//       open: false,
//     };
//   }

//   handleRequestClose() {
//     this.setState({
//       open: false,
//     });
//   }

//   handleTouchTap() {
//     this.setState({
//       open: true,
//     });
//   }

//   render() {
//     const standardActions = (
//       <FlatButton
//         label="Ok"
//         primary
//         onTouchTap={this.handleRequestClose}
//       />
//     );

//     return (
//       <div style={styles.container}>
//         <Dialog
//           open={this.state.open}
//           title="Sign In"
//           actions={standardActions}
//           onRequestClose={this.handleRequestClose}
//         >
//               Facebook Redirect
//         </Dialog>
//         <h1>Lang-Go</h1>
//         <h2>learn from native speakers</h2>
//         <div>
//           <RaisedButton
//             label="Sign In"
//             secondary
//             onTouchTap={this.handleTouchTap}
//           />
//         </div>
//       </div>
//     );
//   }
// }

class Splash extends Component {
  render() {
    return (
      <div>
        <h1>The Catalina Wine Mixer</h1>
      </div>
    );
  }
}

export default Splash;
