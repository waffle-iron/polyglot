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

    // This is in the constructor
    // bc it needs to happen before
    // the component mounts
    this.webrtc = new SimpleWebRTC({
      // TODO: dynamically configure the url
      // for dev and production environments
      url: 'http://localhost:8888',
      localVideoEl: 'videoChat',
      remoteVideosEl: 'inbound-video',
      autoRequestMedia: true
    });
    this.leave = () => {
      this.webrtc.leaveRoom();
    };
  }
  
  componentDidMount() {
    const videoChat = document.getElementById('videoChat');
    let language = this.props.language;
    let postParams = {
      userId: this.props.myId,
      teacher: this.props.teacher
    };
    

    $.post(`/api/sessions/${ language }`, postParams)
      .done((pair) => {
        if ( pair === 'OK' ) {
          { console.log(pair); }
          
          // set up answer
          this.webrtc.on('readyToCall', () => {
            this.webrtc.joinRoom(JSON.stringify(postParams.userId));
          });
        } else {
          { console.log(pair); }
          // make a call
          this.webrtc.on('readyToCall', () => {
            this.webrtc.joinRoom(pair);
          });
        }
      });
  }
  
  render () {
    return (
      <div className='chat-container'>
        <VideoChat leave={ this.leave }/>
        <CardAdd/>
        <TextChat/>
      </div>
    );
  }
}

const mapStateToProps = ( store ) => {
  return {
    myId: store.myId,
    teacher: store.teacher,
    language: store.language
  };
};

export default connect( mapStateToProps )( Chat );
