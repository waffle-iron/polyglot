import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
    };
  }

  render() {
    return (
      <div>
        <video id="background-video" loop autoPlay muted>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
              Your browser does not support the video tag.
          </video>
      </div>
    );
  }
}

export default Chat;
