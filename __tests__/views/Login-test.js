/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../../views/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Login view', () => {
  it('renders correctly', () => {
    renderer.create(<Login />);
  });
});
