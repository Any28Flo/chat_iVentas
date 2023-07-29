export const typeDefs = `
    type Chat {
      id: ID!
      owner: String!
      content: String!
    }

    type User {
      _id: ID
      username: String!
      email: String!
      phone: String!
      password: String!
    }
    
    type Chanel{
  
      name: String
      messages : [ID!] 
      owner: [User]
      members : [ID]
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
    
    
    type Query {
      chats: [Chat]
      hello: String
      me: User
      getChanel(owner:ID):Chanel!

    }
    type Mutation{
      createMessage(content: String!, owner: ID , chanel: ID): Chat

      createChanel(name:String, owner: ID, member:[ID]):Chanel
      
      
      createUser(username: String! email: String!,phone: String!, password: String!): User!
      login(email: String!, password: String!):AuthPayload 
    

    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  

    `
