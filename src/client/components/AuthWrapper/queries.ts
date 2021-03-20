import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        name
        username
      }
      token
    }
  }
`;

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      name
      username
    }
  }
`;
