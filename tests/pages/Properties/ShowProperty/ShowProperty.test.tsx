import React from 'react';

import { render, cleanup, RenderResult, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';

import ShowProperty from '../../../../src/pages/Properties/ShowProperty';
import { PROPERTY_QUERY } from '../../../../src/pages/Properties/ShowProperty/graphql';

describe('ShowProperty', () => {
  const mocks = [
    {
      request: {
        query: PROPERTY_QUERY,
        variables: {
          id: 1,
        },
      },
      result: {
        data: {
          property: { name: 'Property 1' },
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
          <ShowProperty
            match={{ params: { id: '1' }, isExact: true, path: '', url: '' }}
          />
        </MockedProvider>,
      );
      await wait(0);
    });

    return expect(component!).toMatchSnapshot();
  });

  it('loads the graphql data', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <ShowProperty
            match={{ params: { id: '1' }, isExact: true, path: '', url: '' }}
          />
        </MockedProvider>,
      );
      await wait(0);
    });

    return expect(
      component!.getByText('Property 1', { selector: 'span' }),
    ).toBeTruthy();
  });
});
