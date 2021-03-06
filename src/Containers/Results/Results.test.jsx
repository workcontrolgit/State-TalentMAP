import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Results from './Results';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Main', () => {
  const api = 'http://localhost:8000/api/v1';

  it('is defined', () => {
    const results = TestUtils.renderIntoDocument(<Provider store={mockStore({})}><MemoryRouter>
      <Results isAuthorized={() => true} api={api} />
    </MemoryRouter></Provider>);
    expect(results).toBeDefined();
  });

  it('it can handle authentication redirects', () => {
    const results = TestUtils.renderIntoDocument(<Provider store={mockStore({})}><MemoryRouter>
      <Results isAuthorized={() => false} api={api} />
    </MemoryRouter></Provider>);
    expect(results).toBeDefined();
  });

  it('it can call the onChildToggle function', () => {
    const wrapper = shallow(
      <Results.WrappedComponent isAuthorized={() => true} fetchData={() => {}} api={api} />,
    );
    expect(wrapper.instance().state.key).toBe(0);
    wrapper.instance().onChildToggle();
    expect(wrapper.instance().state.key).toBeGreaterThan(0);
  });
});
