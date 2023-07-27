import { gql, useMutation } from '@apollo/client';

const POST_LOGIN_QUERY = gql`
 mutation login($email:String! , $password : String! ){{
  
    login(email : $email, password : $password){
        token
    }
    
  }
}
  }`;

export {
  POST_LOGIN_QUERY
}