import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppContainer } from "./assets/components/styles";

import ProtectedRoute from "./assets/components/layout/ProtectedRoute";
import ChatRoom from "./assets/components/pages/ChatRoom";
import Home from "./assets/components/pages/Home";

type Props = {
  children: string | JSX.Element
}

function App({ children }: Props) {


  //useEffect(() => {
  //const channel = pusherClient.subscribe("my-channel");
  //  console.log(channel)
  //channel.bind('my-event', (data: Message) => {
  //console.log(data);
  //const { from, message } = data
  //setChats((prevState) => [
  //...prevState,
  //{ from, message, }

  //])

  //})

  //return () => {
  //pusherClient.unsubscribe("my-channel");
  //};
  //}, [])


  return (
    <AppContainer>
      {children}
    </AppContainer>
  )
}

export default App
