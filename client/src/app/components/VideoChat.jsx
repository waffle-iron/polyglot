import React, { Component } from 'react';
import InboundVideo from './InboundVideo';
import OutboundVideo from './OutboundVideo';
import ExitChat from './ExitChat';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
import * as types from '../actionTypes.js';

export class VideoChat extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <InboundVideo/>
        <OutboundVideo/>
        <FloatingActionButton style={{color: 'white'}} onTouchTap={ this.props.handleOpen }>
          <ContentAdd/>
        </FloatingActionButton>
        <Dialog
          title='Exit Chat'
          modal={ false }
          open={ this.props.chatModal }
          onRequestClose={ this.props.handleClose }
          autoScrollBodyContent={true}
        >
        <ExitChat/>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ( store ) => {
  return {
    chatModal: store.chatModal
  };
};

/* eslint-disable */
const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    handleOpen: () => {
      ownProps.leave();
      let action = { type: types.CHAT_MODAL };
      dispatch( action );
    },
    handleClose: () => {
      let action = { type: types.CLOSE_CHAT_MODAL };
      dispatch( action );
    }
  };
};
/* eslint-enable */

export default connect( mapStateToProps, mapDispatchToProps )( VideoChat );
