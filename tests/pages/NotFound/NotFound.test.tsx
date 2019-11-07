import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NotFound from '../../../src/pages/NotFound';

afterEach(cleanup);

it('renders without crashing', () => {
  const notFound = render(<NotFound />);
  expect(notFound).toMatchSnapshot();
});
