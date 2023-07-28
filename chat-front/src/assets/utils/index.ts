import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  # Increments a back-end counter and gets its resulting value
  mutation login {
  login(email:"yoda2@gmail.com", password:"98765432" ){
    token
    user_info {
      username
      email
      phone
    }
  }
}
`;


export const queryClient = new ApolloClient({
  uri: import.meta.env.VITE_APP_CHAT_URI!,
  cache: new InMemoryCache(),
});