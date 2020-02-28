/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../../components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title from props', () => {
    const tree = renderer.create(<Header title={'Example'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
