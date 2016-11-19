import React from 'react';
// shallow is important it makes sure your test only tests intended component and not it's children
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
// import Chat from '../../client/src/app/Chat';
// import Peer from 'peerjs';
import { resetCache } from '../../server/models/sessions';

describe('PeerJS', function() {

  afterEach(function() {
    resetCache();
  });

  xit('Should have a Peer object on the Chat component', function() {
    const wrapper = shallow(<Chat />);
    expect(wrapper.state('peer')).to.be.an.instanceOf(Peer);
  });

  xit('Should take myId, language, and teacher as props', function() {
    const wrapper = shallow(<Chat myId='123' language='italian' teacher='true' />);
    const inst = wrapper.instance();
    expect(inst.props.myId).to.equal('123');
    expect(inst.props.language).to.equal('italian');
    expect(inst.props.teacher).to.equal('true');
  });
  
});
