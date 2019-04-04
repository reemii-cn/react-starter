import React from 'react';
import {
  shallow
} from 'enzyme';
import Empty from './Empty';

it('renders without crashing', () => {
  shallow( < Empty / > );
});