import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Message {
    id: ID!
    content: String!
    timestamp: String!
  }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    sendMessage(content: String!): Message!
  }

  type Subscription {
    newMessage: Message!
  }
`)

export {
  schema
}