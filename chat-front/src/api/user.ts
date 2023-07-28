import { gql } from '@apollo/client';

const POST_LOGIN_QUERY = gql`
 mutation login($email : String!, $password : String!){
    login(email:$email, password:$password){
      token
      user_info {
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