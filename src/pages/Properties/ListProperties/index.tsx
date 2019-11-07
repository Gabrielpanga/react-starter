import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { PropertyModel } from 'models/property-model';
import Property from '../../../components/Property';
import { PROPERTIES_NAMES_QUERY } from './graphql';
import locations from '../../../routes';

const Properties = () => {
  const { loading, error, data } = useQuery(PROPERTIES_NAMES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // @TODO:  update the names since 'properties2' is not a proper name for the example
  const properties = data.properties2.map((property: PropertyModel) => (
    <Link
      to={locations.showProperty(property.id)}
      key={`property-${property.id}`}
    >
      <Property property={property} />
    </Link>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Properties</h1>
      </header>
      <div> {properties} </div>
    </div>
  );
};

export default Properties;
