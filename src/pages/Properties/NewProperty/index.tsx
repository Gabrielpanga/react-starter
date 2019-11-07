import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Property from '../../../components/Property';
import { PropertyModel } from 'models/property-model';

import { PROPERTIES_NAMES_QUERY, NEW_PROPERTY_MUTATION } from './graphql';

const NewProperty = () => {
  const { loading, error, data } = useQuery(PROPERTIES_NAMES_QUERY);

  const [propertiesControllerCreate] = useMutation(NEW_PROPERTY_MUTATION);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const { properties2 } = data;

  let properties = properties2.sort(
    (a: PropertyModel, b: PropertyModel) => b.id - a.id,
  );
  properties = properties.map((property: PropertyModel) => (
    <Property key={`property-${property.id}`} property={property} />
  ));

  let input: HTMLInputElement;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Properties</h1>
      </header>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            propertiesControllerCreate({
              refetchQueries: [{ query: PROPERTIES_NAMES_QUERY }],
              variables: { name: input.value },
            });

            input.value = '';
          }}
        >
          <input
            ref={node => {
              if (node !== null) {
                input = node;
              }
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
      </div>
      <div> {properties} </div>
    </div>
  );
};

export default NewProperty;
