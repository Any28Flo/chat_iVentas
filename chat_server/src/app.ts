import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import Pusher from 'pusher';

import config from "./config";

const pusher = new Pusher({
  appId: config.APP_ID,
  key: config.KEY,
  secret: config.SECRET,
  cluster: config.CLUSTER,
  useTLS: true,
});


const schema = buildSchema(`
  type Message {
    id: ID!
    content: String!
    timestamp: String!
  }

  type Query {
    messages: [Message!]!
  
    type Mutation {
      sendMessage(content: String!): Message!
    }


`);
interface Message {
  id: string,
  content: string;
  timestamp: string;
}

const messages: Message[] = [];

// Your resolvers
const root = {
  messages: () => messages,
  sendMessage: (content: string): Message => {
    const timestamp = new Date().toISOString();
    const newMessage: Message = { id: messages.length.toString(), content, timestamp };
    messages.push(newMessage);

    // Trigger the 'newMessage' event on the 'messages' channel using Pusher
    pusher.trigger('messages', 'newMessage', newMessage);

    return newMessage;
  },
};


const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables the GraphiQL interface for testing
}));

export default app;
