import { gql } from '@apollo/client';

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
};

const POST_LOGIN_QUERY = gql`
 mutation login($email : String!, $password : String!){
    login(email:$email, password:$password){
      token
      user_info {
        _id
        username
        email
        phone
      }
    }
  }
`;

export {
  POST_LOGIN_QUERY
}