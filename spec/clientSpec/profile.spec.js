import React from 'react';
// shallow is important it makes sure your test only tests intended component and not it's children
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import App from '../../client/src/app/components/App';
import Profile from '../../client/src/app/components/Profile';


describe('Profile Component', function () {

  it('Should have an App component', function () {
    const wrapper = shallow(<Profile />);
    expect(wrapper.props().existTest).to.be.undefined;
  });
});