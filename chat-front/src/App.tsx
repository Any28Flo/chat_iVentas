import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppContainer } from "./assets/components/styles";


import { pusherClient } from "./assets/utils";

import ProtectedRoute from "./assets/components/layout/ProtectedRoute";
import ChatRoom from "./assets/components/pages/ChatRoom";
import Home from "./assets/components/pages/Home";


function App() {

  const [chats, setChats] = useState([]);
  /**
   * TODO:
   * -Refactor useContext
   */
  let [user, setUser] = useState<string>('Daedra');

  // const handleLogin = () => setUser({ id: '1', name: 'robin' });
  // const handleLogout = () => setUser(null);


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
          <Route element={<ProtectedRoute username={user} />}>
            <Route path="/chat-room" element={<ChatRoom chats={chats} />} />
          </Route>
        </Routes>
      </Router>

    </AppContainer>
  )
}

export default App
