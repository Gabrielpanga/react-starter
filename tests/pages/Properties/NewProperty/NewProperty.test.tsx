import React from 'react';
import { render, cleanup, RenderResult, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';

import NewProperty from '../../../../src/pages/Properties/NewProperty';
import { PROPERTIES_NAMES_QUERY } from '../../../../src/pages/Properties/NewProperty/graphql';

describe('NewProperty', () => {
  const mocks = [
    {
      request: {
        query: PROPERTIES_NAMES_QUERY,
      },
      result: {
        data: {
          properties2: [{ id: '1', name: 'Property 1' }],
        },
      },
    },
  ];

  afterEach(cleanup);

  it('matches the snapshot', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <NewProperty />
        </MockedProvider>,
      );
      await wait(0);
    });

    return expect(component!).toMatchSnapshot();
  });
});
