import { gql } from '@apollo/client';


export type Message = {
  content: string
  id: string,
  from: string
}
export type MessageProps = {
  message: Message
}
type Messages = {
  chats: Message[]
}

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
