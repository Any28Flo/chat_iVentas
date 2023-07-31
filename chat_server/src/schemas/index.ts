const typeDefs = `
  type Chat {
    id: Int!
    sender: ID
    content: String
    chanel: ID
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
