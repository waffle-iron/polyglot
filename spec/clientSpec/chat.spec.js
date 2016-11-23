import React from 'react';
// shallow is important it makes sure your test only tests intended component and not it's children
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import Chat from '../../client/src/app/components/Chat';
import VideoChat from '../../client/src/app/components/VideoChat';
import TextChat from '../../client/src/app/components/TextChat';
import CardAdd from '../../client/src/app/components/CardAdd';

describe('Chat Component', function () {

  it('Should hold a VideoChat, Text Chat, and a Card Add', function() {
    const wrapper = mount(<Chat/>);

    expect( wrapper.containsAllMatchingElements([
      <VideoChat/>,
      <TextChat/>,
      <CardAdd/>
    ])).to.be.true;
  });

  it('Should pass an outbound video stream to OutboundVideo');

  it('Should accept and incoming video stream to Inbound Video');

  it('Should have an Exit Button');

  it('Should pass chats from the TextChatInput to the TextChatLog');

});
