import { gql } from 'apollo-boost';

// ***************** Queries ****************** //
export const PROPERTIES_NAMES_QUERY = gql`
  query {
    properties2(filter: { limit: 10, order: "name" }) {
      id
      name
    }
  }
`;

// ***************** Mutations ****************** //
export const NEW_PROPERTY_MUTATION = gql`
  mutation($name: String!) {
    propertiesControllerCreate(newPropertyInput: { name: $name }) {
      name
      id
    }
  }
`;
