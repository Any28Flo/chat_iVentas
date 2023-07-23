import { createYoga, createSchema } from 'graphql-yoga'
import { pusher } from './utils/pusher';

import typeDefs from './schemas';
import { chats } from './resolvers';

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: {
      Query: {
        chats(root, args, context) {
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
            //  return pubsub.asyncIterator(CHAT_CHANNEL)
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