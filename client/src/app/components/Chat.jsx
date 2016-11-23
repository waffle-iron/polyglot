import React, { Component } from 'react';
import $ from 'jquery';
import SimpleWebRTC from 'simplewebrtc';
import { connect } from 'react-redux';
import VideoChat from './VideoChat';
import TextChat from './TextChat';
import CardAdd from './CardAdd';

export class Chat extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const videoChat = document.getElementById('videoChat');
    let language = this.props.language;
    let postParams = {
      userId: this.props.myId,
      teacher: this.props.teacher
    };
    let webrtc = new SimpleWebRTC({
      localVideoEl: 'videoChat',
      remoteVideosEl: 'inboundVideo',
      autoRequestMedia: true
    });

    $.post(`/api/sessions/${ language }`, postParams)
      .done((pair) => {
        if ( pair === 'OK' ) {
          // set up answer
          webrtc.on('readyToCall', () => {
            webrtc.joinRoom(JSON.stringify(postParams.userId));
          });
        } else {
          // make a call
          webrtc.on('readyToCall', () => {
            webrtc.joinRoom(pair);
          });
        }
      });
  }
  
  render () {
    return (
      <div>
        <VideoChat/>
        <TextChat/>
        <CardAdd/>
      </div>
    );
  }
}

const mapStateToProps = ( store ) => {
  return {
    userId: store.userId,
    teacher: store.teacher,
    language: store.language
  };
};

export default connect( mapStateToProps )( Chat );
