import { useState } from "react";

import { useQuery, gql } from '@apollo/client';

import { AppContainer, MessagesContainer } from "./assets/components/styles";
import AddNewMessage from "./assets/components/Message/AddNewMessage";

interface Message {
  message: string
  id: number,
  from: string
}
function App() {

  const GET_MESSAGES = gql`
  query GetChats {
    chats{
      id,
      from,
      message

    }
  }
`;
  const { loading, error, data } = useQuery(GET_MESSAGES);

  const handleMessageSend = (message: string) => {
    let newMessage = {
      from: 'Daedra',
      message: message
    }
    console.log(newMessage);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <AppContainer>

      {
        data.chats.map(({ id, message }: Message) => (
          <MessagesContainer key={id}>
            {message}
          </MessagesContainer>
        ))
      }
      <AddNewMessage onSend={handleMessageSend} />

    </AppContainer>
  )
}

export default App
