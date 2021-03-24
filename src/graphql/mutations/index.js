import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(user: { email: $email, password: $password }) {
      id
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation signup($fullname: String!, $email: String!, $password: String!) {
    signup(user: { email: $email, password: $password, fullname: $fullname }) {
      id
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation sendMessage($message: String!, $conversationId: ID!) {
    sendMessage(chat: { message: $message, conversationId: $conversationId }) {
      id
    }
  }
`;

export { LOGIN_USER, REGISTER_USER, SEND_MESSAGE };
