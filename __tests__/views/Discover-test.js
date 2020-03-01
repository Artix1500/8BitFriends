/**
 * @format
 */

import 'react-native';
import React from 'react';
import Discover from '../../views/Discover';

// Note: test renderer must be required after react-native.
import render from 'react-test-renderer';

describe('Discover view', () => {
  let instance;

  it('renders correctly', () => {
    render.create(<Discover />);
  });

  beforeEach(() => {
    const component = render.create(<Discover />);
    instance = component.getInstance();
  });

  it('Search value is empty after mount', () => {
    expect(instance.state.search.value).toBe('');
  });

  it('Search value is changed after calling function handleSearch', async () => {
    await instance.handleSearch('Artix1500');
    expect(instance.state.search.value).toBe('Artix1500');
  });

  it('Api call returns at least one user', async () => {
    await instance.handleSearch('Artix1500');
    expect(instance.state.data.length > 0).toBe(true);
  });

  it('Api call returns 10 users', async () => {
    await instance.handleSearch('a');
    expect(instance.state.data.length === 10).toBe(true);
  });

  it('Api call returns informations about specyfic user', async () => {
    await instance.handleSearch('Artix1500');
    let listOfUsers = instance.state.data.filter(
      user => user.login === 'Artix1500',
    );
    expect(listOfUsers.length > 0).toBe(true);
  });
});
