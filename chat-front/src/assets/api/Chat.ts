import { gql } from '@apollo/client';


export type ChatType = {
  content: string
  id: string,
  sender: string,
}
export type MessageProps = {
  data: ChatType
}

type Chats = {
  chats: ChatType[]
}

const GET_MESSAGES_QUERY = gql`
query getMessages($chanelId : ID){
  getMessages(chanelId:$chanelId){
    sender,
    content
    id
  }
}`;

const MESSAGES_SUBSCRIPTION = gql`
  subscription{
    messageSent{
      
      from
    }
  }
`;
const SEND_MESSAGE = gql`

  mutation createMessage($content : String , $sender : ID! , $chanel: ID){
    createMessage(content:$content, sender:$sender, chanel :$chanel){
      content
      id
      sender
    }
    
  }
`
export { GET_MESSAGES_QUERY, MESSAGES_SUBSCRIPTION, SEND_MESSAGE };
