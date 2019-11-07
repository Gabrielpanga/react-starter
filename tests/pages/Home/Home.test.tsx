import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from '../../../src/pages/Home';

afterEach(cleanup);

it('renders without crashing', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
