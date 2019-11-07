import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../../../src/components/Navbar';

afterEach(cleanup);

it('renders without crashing', () => {
  const history = createMemoryHistory();
  const navbar = render(
    <Router history={history}>
      <Navbar />
    </Router>,
  );
  expect(navbar).toMatchSnapshot();
});
