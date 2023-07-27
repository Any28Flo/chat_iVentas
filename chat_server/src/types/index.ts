export const typeDefs = `
    type Chat {
      id: ID!
      from: String!
      message: String!
    }
    type User {
      id: ID!
      username: String!
      email: String!
      phone: String!
    }
    type AuthPayload {
      user_info: User!
      token: String!
    }
  
  
    type Query {
      chats: [Chat]
      hello: String
      me: User # Get the currently logged-in user

    }
    type Mutation{
      sendMessage(from: String!, message: String!): Chat

      createUser(username: String! email: String!,phone: String!, password: String!): User!
      login(email: String!, password: String!): AuthPayload # Login with email and password

    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  
    `