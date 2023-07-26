export const typeDefs = `
    type Chat {
      id: Int!
      from: String!
      message: String!
    }
    type User {
      id: ID!
      username: String!
      email: String!
      phone: String!
      password : String!
    }
  
    type Query {
      chats: [Chat]
      hello: String
    }
    type Mutation{
      sendMessage(from: String!, message: String!): Chat
      createUser(username: String! email: String!,phone: String!, password: String!): User!
    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  
    `