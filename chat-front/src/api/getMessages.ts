import { gql } from '@apollo/client';

const GET_MESSAGES_QUERY = gql`
  query{
    chats{
      id
      from
      message
    }
  }`;
const MESSAGES_SUBSCRIPTION = gql`
  subscription{
    messageSent{
      
      from
    }
  }
`;

export { GET_MESSAGES_QUERY, MESSAGES_SUBSCRIPTION };
