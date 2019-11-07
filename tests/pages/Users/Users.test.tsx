import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Users from '../../../src/pages/Users';

afterEach(cleanup);

it('renders without crashing', () => {
  const users = render(<Users />);
  expect(users).toMatchSnapshot();
});
