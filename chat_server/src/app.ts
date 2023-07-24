import { createYoga, createSchema, createPubSub } from 'graphql-yoga'


import { pusher } from './utils/pusher';

interface Message {
  message: string
  id: number,
  from: string
}

export const chats: Message[] = [{ message: 'Hello', id: 1, from: 'Any11' }, { message: 'Hello', id: 2, from: "Darklord" }];
const CHAT_CHANNEL = "CHAT_CHANNEL";


const pubSub = createPubSub<{
  newMessage: [payload: { from: string, message: string }]
}>();


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
        sendMessage(_, { from, message }, { pubSub }) {
          const chat = { id: chats.length + 1, from, message }

          chats.push(chat)

          // Trigger a 'messageSent' event to all subscribers
          pusher.trigger('my-channel', 'messageSent', {
            message,
          });
          pubSub.publish('CHAT_CHANNEL', { messageSent: chat })

          return chat
        }
      },
      Subscription: {
        newMessage: {
          subscribe: (_, { from, message, id }, { pubSub }) => {
            return pubSub.asyncIterator(CHAT_CHANNEL)

            //pubSub.subscribe('sendMessages',{from,message,id} )
          }
        }

      }

    }
  }),
  context: {
    pubSub
  }
})


export default yoga