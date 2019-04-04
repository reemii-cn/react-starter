import React from 'react';
import {
  shallow
} from 'enzyme';
import Empty from '../components/Empty';

it('renders without crashing', () => {
  shallow( < Empty / > );
});