import React, { Component } from 'react';
import InboundVideo from './InboundVideo';
import OutboundVideo from './OutboundVideo';
import ExitChat from './ExitChat';

// do this in a stylesheet
const videoStyle = {
  height: '75px'
};

class VideoChat extends Component {
  render() {
    return (
      <div>
        <InboundVideo/>
        <OutboundVideo style={ videoStyle }/>
        <ExitChat/>
      </div>
    );
  }
}

export default VideoChat;
