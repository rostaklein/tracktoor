import gql from "graphql-tag";

const fragment = gql`
  fragment BatchFragment on Batch {
    id
    identifier
    name
    note
    createdBy {
      name
    }
  }
`;

export const GetAll = gql`
  query GetAllBatches {
    batches {
      ...BatchFragment
    }
  }
  ${fragment}
`;

export const Add = gql`
  mutation AddBatch($data: BatchCreateInput!) {
    createOneBatch(data: $data) {
      ...BatchFragment
    }
  }
  ${fragment}
`;

export const Update = gql`
  mutation UpdateBatch(
    $where: BatchWhereUniqueInput!
    $data: BatchUpdateInput!
  ) {
    updateOneBatch(where: $where, data: $data) {
      ...BatchFragment
    }
  }
  ${fragment}
`;

export const Delete = gql`
  mutation DeleteBatch($where: BatchWhereUniqueInput!) {
    deleteOneBatch(where: $where) {
      id
    }
  }
`;
