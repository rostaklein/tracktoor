import gql from "graphql-tag";

export const GetAll = gql`
  query GetAllBatches {
    batches {
      id
      identifier
      name
      note
      createdBy {
        name
      }
    }
  }
`;
