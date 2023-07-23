const typeDefs = `
  type Chat {
    id: Int!
    from: String!
    message: String!
  }

  type Query {
    hello: String
    currentUser: String
    chats: [Chat]

  }

  type Mutation {
    sendMessage(from: String!, message: String!): Chat
  }
  
  type Subscription {
    messageSent: Chat
  }
`;
export default typeDefs
