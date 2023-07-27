import { createYoga, createSchema, createPubSub, } from 'graphql-yoga';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { typeDefs } from './types';
import { pusher, } from './utils/pusher';
import UserModel from './models/user.model';
import mongoose from 'mongoose';
import config from './utils/config';


interface Message {
  message: string
  id: number,
  from: string
}
export const chats: Message[] = [{ message: 'Hello', id: 1, from: 'Any11' }, { message: 'Hello', id: 2, from: "Darklord" }];




mongoose.connect(config.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));



const pubSub = createPubSub();

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: {
      Query: {
        hello: () => 'world',
        chats(_, __, context) {
          return chats
        },
        me: (_, __, { currentUser }) => {
          return currentUser;
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

        },
        createUser: async (_, args, context) => {

          const { username, phone, email, password } = args;
          const user = new UserModel({ username, phone, email, password });
          await user.save();
          /**
           * TODO
           * - Add error handler
           * 
           */
          pubSub.publish("newUser", { newUser: user });
          return user;
        },
        login: async (_, args) => {
          const { email, password } = args;

          try {
            const user = await UserModel.findOne({ email });

            if (!user) {
              throw new Error('Invalid email or password');
            }

            const isPasswordValid = await compare(password, user.password);

            if (!isPasswordValid) {
              throw new Error('Invalid email or password');
            }

            const token = sign({ userId: user.email }, config.BCRYPT_HASH);

            const userData = {
              token: token,
              user_info: {
                username: user.username,
                email: user.email,
                phone: user.phone
              }
            };

            return userData
          } catch (error) {
            throw new Error('Login failed: ');
          }
        }
      },
      Subscription: {
        messageSent: {
          subscribe: (_, args, { from, message, id }, info) => pubSub.subscribe('my-channel'),

        }
      }
    }
  }),
  context: ({ request }) => {
    request
  }
})


export default yoga