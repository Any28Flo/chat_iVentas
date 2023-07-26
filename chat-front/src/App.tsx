import { useEffect, useState } from "react";

import { AppContainer, MessagesContainer } from "./assets/components/styles";
import AddNewMessage from "./assets/components/Message/AddNewMessage";
import MessagesList from "./assets/components/Message/MessagesList";

import { pusherClient } from "./assets/utils";


function App() {

  const [chats, setChats] = useState([]);

  const handleMessageSend = (message: string) => {
    let newMessage = {
      from: 'Daedra',
      message: message
    }
  }


  useEffect(() => {
    const channel = pusherClient.subscribe("my-channel");
    //  console.log(channel)
    channel.bind('my-event', (data: Message) => {
      console.log(data);
      const { from, message } = data
      setChats((prevState) => [
        ...prevState,
        { from, message, }

      ])

    })

    return () => {
      pusherClient.unsubscribe("my-channel");
    };
  }, [])


  return (
    <AppContainer>
      <MessagesContainer>
        <MessagesList key='message-01' chats={chats}></MessagesList>
      </MessagesContainer>

      <AddNewMessage onSend={handleMessageSend} />
    </AppContainer>
  )
}

export default App
