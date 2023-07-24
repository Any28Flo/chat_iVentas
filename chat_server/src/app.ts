import { createYoga, createSchema } from 'graphql-yoga'
import { pusher } from './utils/pusher';

interface Message {
  message: string
  id: number,
  from: string
}

export const chats: Message[] = [{ message: 'Hello', id: 1, from: 'Any11' }, { message: 'Hello', id: 2, from: "Darklord" }];


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
    }
  
    type Mutation {
      sendMessage(from: String!, message: String!): Chat
    }
    
    type Subscription {
      messageSent: Chat
    }
  
    `,
    resolvers: {
      Query: {
        chats(_, __, context) {
          return chats
        }


      },
      Mutation: {
        sendMessage(root, { from, message }, { pubsub }) {
          const chat = { id: chats.length + 1, from, message }

          chats.push(chat)

          // Trigger a 'messageSent' event to all subscribers
          pusher.trigger('my-channel', 'messageSent', {
            message,
          });
          return chat
        }
      },
      Subscription: {
        messageSent: {
          subscribe: (root, args, { pubsub }) => {

          }
        }
      }

    }
  }),
  context() {
    return { currentUser: 13 }
  }
})


export default yoga