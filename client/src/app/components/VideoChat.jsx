import React, { Component } from 'react';
import InboundVideo from './InboundVideo';
import OutboundVideo from './OutboundVideo';
import ExitChat from './ExitChat';


class VideoChat extends Component {
  render() {
    return (
      <div>
        <InboundVideo/>
        <OutboundVideo/>
        <ExitChat/>
      </div>
    );
  }
}

export default VideoChat;
