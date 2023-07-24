# FEAT-CONFIG-PUSHER

Author(s): Erika F.

Status: [Draft]

Last Updated : 23- jun- 2023

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

Build a backend realtime application that enable bi-directional communication.

## Goals
- Start a connection
- If the initial connection is successful, enable a TCP connection.
- Kept alive the connection for as long as needed. This way the server could send data. 

## Non-Goals

- Authentication
- Status of connection
- Database configuration

## Background

## Overview
_High-level overview of your proposal_

![backed](/chat_server/docs/imgs/feat-pusher.png)

## Detailed Design 
- We need an backend framework, who could manage request and responses.

- Create a websocket connection connection 
- Handle the incoming messages
- Close the connection.


## Solution 1
_Backend_
    - Server : Node
    - Websocket package: Pusher
    - Database: MongoDB
    - Graph approach
    
## Solution 2

_Backend_
    - Server : Python
    - Websocket package: SocketIO
    - Database:
    - REST approach  