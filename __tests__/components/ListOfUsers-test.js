/**
 * @format
 */

import 'react-native';
import React from 'react';
import ListOfUsers from '../../components/ListOfUsers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('ListOfUsers Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListOfUsers />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title from props', () => {
    const data = [
      {
        __typename: 'User',
        name: 'Artur Haczek',
        login: 'Artix1500',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/38567097?v=4',
        location: null,
        repositories: {totalCount: 12},
      },
    ];
    const tree = renderer.create(<ListOfUsers users={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
