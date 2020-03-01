/**
 * @format
 */

import 'react-native';
import React from 'react';
import User from '../../views/User';

// Note: test renderer must be required after react-native.
import render from 'react-test-renderer';

describe('User view', () => {
  it('Search value is empty after mount', () => {
    const data = {
      __typename: 'User',
      name: 'Artur Haczek',
      login: 'Artix1500',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/38567097?v=4',
      location: null,
      repositories: {totalCount: 12},
    };

    const tree = render
      .create(<User route={{params: {user: data}}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
