# Front Chat


Author(s): Erika F.

Status: [Draft]

Last Updated : 2023-07-20


## Contents

- Goals
- Non-Goals
- Background
- Overview
- Detailed Design
    - Solution 1
        - Frontend
        - Backend
    - Solution 2
        - Frontend
        - Backend
- Considerations
- Metrics



## Objective

_What and why are we doing this?_

Build a front realtime application that enable bi-directional communication.
## Goals
Show a basic UI where:
    - Loop through the messages and display them.
    - Show the user an input field to type their chat message.
    - When the users click a button or presses _ENTER_ send the message.

## Non-Goals

- Authentication
- Create channels
- Group Chat feature

## Overview


## Detailed Design 
- We need an Container
- We need a AddNewMessage component
- We need a state management to the app.
- Need a package to handle the websocket connection
- Need a package to handle the styles.

## Detailed Design 
![frontend](./../docs/front-docs.png)
## Solution 1
 - Frontend : react
 - State management : useContext
 - Style components : styled-components
 - websocket : [react-pusher-hoc](https://github.com/fel1xw/react-pusher-hoc?_gl=1*sx5wmp*_gcl_au*MzY3MzUyODQ3LjE2ODk4NTA3NTg.)

 ## Solution 2:
  - Frontend : vuejs
 - State management : redux 
 - Style components : chakra-ui
 - websocket : [socket.io](https://socket.io/docs/v4/client-api/)


## Considerations
- The push notification has a limit requests after it has a price.
