# Chat front

author : Erika F.

status :

last update: 26- jun- 2023

<hr/>

## Docs

1. [front doc](/chat-front/README.md)

2. [back doc](/chat_server/README.md)

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `>=16`
- [npm][npm] v8.16.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```
If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Demo

Hosted on [link](#)



## Objective

_What and why are we doing this?_

Build a backend realtime application that enable bi-directional communication.

## Goals

 - [ ] La aplicación debera contar con un Login()
- [x] Registrar 10 usuarios (username, número de télefono, email y passsword)
 - [ ] La aplicación debera contar con un Login()
- [ ] Una vez autenticado el usuario verá su lista de conversaciones correspondientes
- [ ] Si el usuario selecciona una conversación se le mostrata los 25 mensajes recientes.

- [ ] Será capaz de mandar mensajes
- [ ] Verá en tiempo real los mensajes entrantes

- [ ] Enviar y recibir mensajes con imagen o multimedia
- [ ] Doble autenticación
- [ ] Integración con Instagram 
- [ ] Prueba end to end del algun servicio

- If the initial connection is successful, enable a TCP connection.
- Kept alive the connection for as long as needed. This way the server could send data. 

## Non-Goals

- Authentication
- Status of connection
- Database configuration

