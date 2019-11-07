import { gql } from 'apollo-boost';

// ***************** Queries ****************** //
export const PROPERTY_QUERY = gql`
  query($id: Float!) {
    property(id: $id) {
      name
    }
  }
`;
