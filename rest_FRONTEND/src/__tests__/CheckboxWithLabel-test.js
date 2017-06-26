// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});

it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<CheckboxWithLabel onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });


  // sinon.spy(TestComponent.prototype, 'componentDidMount');
// https://github.com/airbnb/enzyme/issues/301
