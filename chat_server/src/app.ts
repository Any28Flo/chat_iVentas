import { createYoga, createSchema, createPubSub, } from 'graphql-yoga';
import { GraphQLError } from 'graphql'

import express from 'express';

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { typeDefs } from './types';
import { pusher, } from './utils/pusher';
import UserModel from './models/user.model';

import config from './utils/config';
import MessageModel from './models/message.model';
import ChanelModel from './models/chanel.model';
import { log } from 'console';


const pubSub = createPubSub();

export function buildApp(app: ReturnType<typeof express>) {
  const yoga = createYoga({
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
      allowedHeaders: ['X-Custom-Header'],
      methods: ['POST']
    },
    schema: createSchema({
      typeDefs: typeDefs,
      resolvers: {
        Query: {
          hello: () => 'world',
          chats(_, __, context) {
            //add method call all messages by idChanel
          },
          me: (_, __, { currentUser }) => {
            //handle it with sessions
            return currentUser;
          },

        },
        Mutation: {
          createMessage: async (_, args, context) => {
            const { content, owner, chanel } = args;
            const message = new MessageModel({
              content
            })
            try {
              const messageSaved = await message.save();
              /*pusher.trigger("my-channel", "create-message", {
                content: content
              });*/
              return {
                id: '23fADFADDF##$!"s',
                content: messageSaved.content,
                owner: '12e21'
              }

            } catch (error) {
              console.log(error);

              throw new Error('Error create message');

            }
            // pubSub.publish('my-channel', { messageSent: chat })

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
          login: async (_, args, context) => {

            const { email, password } = args;

            try {
              const user = await UserModel.findOne({ email });

              if (!user) {
                throw new Error('Invalid email or password');
              }

              const isPasswordValid = await compare(password, user.password);

              if (!isPasswordValid) {
                return Promise.reject(
                  new GraphQLError(`Cannot post comment on non-existing link with id '${args.linkId}'.`)
                )
                throw new Error('Invalid email or password');
              }

              const token = sign({ userId: user.email }, config.BCRYPT_HASH);

              const userData = {

                user_info: {
                  username: user.username,
                  email: user.email,
                  phone: user.phone
                },
                token: token
              };

              return userData
            } catch (error) {
              throw new Error('Login failed: ');
            }


          },
          createChanel: async (_, args, context) => {
            const { name } = args;

            try {
              const chanelExist = await ChanelModel.findOne({ name: name })
              if (chanelExist) {
                throw new Error('Chanel name must be unique')
              }

              const chanel = new ChanelModel({ name });

              const newChanel = await chanel.save();
              /**
               * 
               * TODO:
               * - handle validation chanel-name unique
               */

              return {
                name: newChanel.name
              }



            } catch (error) {

            }
            /**
             * TODO
             * - Add error handler
             * 
             */
            //pubSub.publish("newUser", { newUser: user });

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
  app.use(yoga.graphqlEndpoint, yoga);

  return yoga.graphqlEndpoint;
}


