import React from 'react';
// shallow is important it makes sure your test only tests intended component and not it's children
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import App from '../../client/src/app/App';

describe('React Components', function () {

  it('Should have an App component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.props().baller).to.be.undefined;
  });

  it('Should have a Nav component', function () {
    const wrapper = shallow(<Nav />);
    expect(wrapper.props().baller).to.be.undefined;
  });

  it('Should have a Dash component', function () {
    const wrapper = shallow(<Dash />);
    expect(wrapper.props().baller).to.be.undefined;
  });

  it('Should have a Splash component', function () {
    const wrapper = shallow(<Splash />);
    expect(wrapper.props().baller).to.be.undefined;
  });

  it('Should have a Signup component', function () {
    const wrapper = shallow(<Signup />);
    expect(wrapper.props().baller).to.be.undefined;
  });

});
