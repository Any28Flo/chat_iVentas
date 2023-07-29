
export const typeDefs = `
    type Chat {
      id: ID!
      sender: ID! 
      receiver: ID!
      content: String! 
      chanel: ID
      created_at : String
    }

    type User {
      _id: ID
      username: String!
      email: String!
      phone: String!
      password: String!
    }
    
    type Chanel{
      id: ID
      name: String
      owner: ID!,
      member : User!
      messages :[Chat]
      
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
    
    type ResponseGetChanels {
        chanels : [Chanel]!
        numChanels : Int
    }
    type Query {
      chats: [Chat]
      hello: String
      me: User
      getChanels(ownerId: ID) :ResponseGetChanels
      getMessages(chanelId: ID, sortBy: String): [Chat]!
    }

    type Mutation{
      createMessage(content: String, sender: ID!, receiver: ID, chanel:ID): Chat

      createChanel(name:String, ownerId: ID, memberId:ID):Chanel
      
      
      createUser(username: String! email: String!,phone: String!, password: String!): User!
      
      login(email: String!, password: String!):AuthPayload 
    

    }
    type Subscription {
      countdown(from: Int!): Int!
      messageSent(from:String!):Chat
    }  

    `
