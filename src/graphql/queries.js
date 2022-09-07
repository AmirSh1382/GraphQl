import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        username
        phone
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
      phone
    }
  }
`;

export { GET_ALL_USERS , GET_USER}