import { gql } from "@apollo/client";

const GET_CONVERSATIONS = gql`
  query getConversations {
    conversations {
      id
      createdAt
      lastMessage {
        message
      }
      sender {
        id
        fullname
      }
      recipient {
        fullname
      }
    }
  }
`;

const GET_CHATS_BY_CONVERSATION = gql`
  query getChats($conversationId: ID!) {
    chats(conversationId: $conversationId) {
      id
      message
      sender {
        id
        fullname
      }
    }
  }
`;

export { GET_CONVERSATIONS, GET_CHATS_BY_CONVERSATION };
