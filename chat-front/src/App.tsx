import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppContainer, MessagesContainer } from "./assets/components/styles";
import Home from "./assets/components/pages/Home";
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </AppContainer>
  )
}

export default App
