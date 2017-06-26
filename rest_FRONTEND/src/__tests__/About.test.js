import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import About from '../routes/About';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';


it('should render', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <About/>
    </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
