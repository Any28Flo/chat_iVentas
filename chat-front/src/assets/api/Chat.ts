import { gql } from '@apollo/client';


export type Chat = {
  content: string
  id: string,
  sender: string,
  receiver: string,
}
export type MessageProps = {
  message: Chat
}

type Chats = {
  chats: Chat[]
}

const GET_MESSAGES_QUERY = gql`
query getMessages($chanelId : ID){
  getMessages(chanelId:$chanelId){
    sender,
    content
    created_at
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
