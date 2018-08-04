import { gql } from "apollo-boost";

export const colorQuery = gql`
  query {
    colors {
      id
      name
    }
  }
`;