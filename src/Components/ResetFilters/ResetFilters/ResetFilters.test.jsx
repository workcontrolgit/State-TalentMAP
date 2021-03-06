import { shallow } from 'enzyme';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ResetFilters from './ResetFilters';

describe('ResetFilters', () => {
  let resetButton = null;

  beforeEach(() => {
    resetButton = TestUtils.renderIntoDocument(<ResetFilters />);
  });

  it('is defined', () => {
    expect(resetButton).toBeDefined();
  });

  it('can click on the button', () => {
    const wrapper = shallow(<ResetFilters />);
    wrapper.find('button').simulate('click');
  });

  it('can click on the button and confirm', () => {
    const wrapper = shallow(<ResetFilters />);
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
  });
});
