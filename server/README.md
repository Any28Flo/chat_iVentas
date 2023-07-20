# API iVentas

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

Build a backend realtime application that enable bi-directional communication.
## Goals
- Start a connection
- If the initial connection is successful, enable a TCP connection.
- Kept alive the connection for as long as needed. This way the server could send data. 

## Non-Goals

- N/A

## Background

## Overview
_High-level overview of your proposal_

![backed](./../docs/backend_arqui.png)
## Detailed Design 
- We need an backend framework, who could manage request and responses.
- We need an database to save the messages.
- Create a websocket connection connection 
- Save the messages in a db.
- Close the connection.


## Solution 1
_Backend_
    - Server : ExpressJS
    - Websocket package: Pusher
    - Database: MongoDB
    
## Solution 2

_Backend_
    - Server : Koa.ks
    - Websocket package: SocketIO
    - Database: 
    