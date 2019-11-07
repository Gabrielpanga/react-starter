import { gql } from 'apollo-boost';

// ***************** Queries ****************** //
export const PROPERTIES_NAMES_QUERY = gql`
  query {
    properties2 {
      id
      name
    }
  }
`;
