import { createYoga, createSchema, createPubSub, } from 'graphql-yoga'

import { pusher, } from './utils/pusher';
interface Message {
  message: string
  id: number,
  from: string
}
export const chats: Message[] = [{ message: 'Hello', id: 1, from: 'Any11' }, { message: 'Hello', id: 2, from: "Darklord" }];

const pubSub = createPubSub();

const yoga = createYoga({
  schema: createSchema({
    typeDefs: `
    type Chat {
      id: Int!
      from: String!
      message: String!
    }
  
    type Query {
      chats: [Chat]
      hello: String
    }
    type Mutation{
      sendMessage(from: String!, message: String!): Chat

    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  
    `,
    resolvers: {
      Query: {
        hello: () => 'world',
        chats(_, __, context) {
          return chats
        }
      },
      Mutation: {
        sendMessage(_, { from, message }, context) {
          const chat = { id: chats.length + 1, from, message };

          chats.push(chat);

          pusher.trigger("my-channel", "my-event", {
            message: message,
            from: from,
          });

          // pubSub.publish('my-channel', { messageSent: chat })
          return chat

        }
      },
      Subscription: {
        messageSent: {
          subscribe: (_, args, { from, message, id }, info) => pubSub.subscribe('my-channel'),
          // resolve: payload => payload
        }
      }
    }
  }),
  context: request => {

  },
})


export default yoga