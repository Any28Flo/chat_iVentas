export const typeDefs = `
    type Chat {
      id: ID!
      owner: String!
      content: String!
    }

    type User {
      username: String!
      email: String!
      phone: String!
    }
    
    type Chanel{
      name: String,
      messages : [ID!] 
    }
    type Message{
      content :String, 
      owner : ID,
      chanel : ID

    }
    type AuthPayload {
      user_info: User!
      token: String!
  
    }
    type LoginData {
      password: String,
      email: String
    }
    
    type Error {
      message: String!
    }
    
    union Login = AuthPayload | Error
    
  
  
    type Query {
      chats: [Chat]
      hello: String
      me: User # Get the currently logged-in user

    }
    type Mutation{
      createMessage(content: String!): Chat

      createChanel(name:String):Chanel

      createUser(username: String! email: String!,phone: String!, password: String!): User!
      login(email: String!, password: String!):AuthPayload 
    

    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  

    `
