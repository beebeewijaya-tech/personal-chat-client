import { gql } from "@apollo/client";

const SUBSCRIBE_TO_MESSAGE = gql`
  subscription getChats($conversationId: ID!) {
    chat(conversationId: $conversationId) {
      id
      message
      sender {
        id
      }
    }
  }
`;

export { SUBSCRIBE_TO_MESSAGE };
