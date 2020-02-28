/**
 * @format
 */

import 'react-native';
import React from 'react';
import Discover from '../../views/Discover';

// Note: test renderer must be required after react-native.
import render from 'react-test-renderer';


describe('Discover view', () => {
  it('renders correctly', () => {
    render.create(<Discover />);
  });
 
});
