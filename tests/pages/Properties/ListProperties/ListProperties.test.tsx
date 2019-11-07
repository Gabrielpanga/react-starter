import React from 'react';

import { render, cleanup, RenderResult, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import wait from 'waait';

import ListProperties from '../../../../src/pages/Properties/ListProperties';
import { PROPERTIES_NAMES_QUERY } from '../../../../src/pages/Properties/ListProperties/graphql';

describe('ListProperties', () => {
  const mocks = [
    {
      request: {
        query: PROPERTIES_NAMES_QUERY,
      },
      result: {
        data: {
          properties2: [
            { id: 1, name: 'Property 1' },
            { id: 2, name: 'Property 2' },
          ],
        },
      },
    },
  ];
  const history = createMemoryHistory();
  afterEach(cleanup);

  it('matches the snapshot', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <ListProperties />
          </Router>
        </MockedProvider>,
      );
      await wait(0);
    });

    return expect(component!).toMatchSnapshot();
  });

  it('Lists all properties returned by graphql', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <ListProperties />
          </Router>
        </MockedProvider>,
      );
      await wait(0);
    });

    const exp1 = expect(
      component!.getByText('Property 1', { selector: 'span' }),
    ).toBeTruthy();
    const exp2 = expect(
      component!.getByText('Property 2', { selector: 'span' }),
    ).toBeTruthy();

    return Promise.all([exp1, exp2]);
  });
});
