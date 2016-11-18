import React, { Component } from 'react';
import { apiKeys } from '../../../config/peerjs.config.js';
import $ from 'jquery';
import LoggerMixin from 'react-logger';
import Peer from 'peerjs';

class Chat extends Component {
  constructor(props) {
    super(props);
    // TODO: pass in the initial id as a prop
    this.state = {
      peer: new Peer(this.props.store.getState().myId, { key: apiKeys.peerJs }),
    };
  }
  // On mount, send AJAX request to get other id
  // if we get an id, make a call
  // if we don't, set up an answer
  componentDidMount() {
    let videoSrc = document.getElementById('videoSrc');
    const videoChat = document.getElementById('videoChat');
    let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    const url = window.URL || window.webkitURL;
    $.post(`/api/sessions/${this.props.store.getState().language}`, { userId: this.props.store.getState().myId, teacher: this.props.store.getState().teacher })
      .done((pair) => {
        if ( pair === 'OK' ) {
          // set up answer
          this.state.peer.on('call', (call) => {
            getUserMedia({ video: true, audio: true }, (stream) => {
              call.answer(stream);
              call.on('stream', (remoteStream) => {
                // Show stream in video element
                videoSrc.src = url ? url.createObjectURL(remoteStream) : remoteStream;
                videoChat.play();
              });
            }, (err) => {
              // TODO: Figure out error handling
            });
          }); 
        } else {
          // make a call
          getUserMedia({ video: true, audio: true }, (stream) => {
            let call = this.state.peer.call(pair, stream);
            call.on('stream', (remoteStream) => {
              // Show stream in the video element
              videoSrc.src = url ? url.createObjectURL(remoteStream) : remoteStream;
              videoChat.play();
            });
          }, (err) => {
            // TODO: Figure out error handling
          });
        }
      });
  }
  
  render () {
    return (
      <div>
          <video id='videoChat'>
              <source id='videoSrc'/>
              Your browser does not support the video tag.
          </video>
      </div>
    );
  }
}

export default Chat;
