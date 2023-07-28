import { gql } from "@apollo/client";

const GET_CHANEL_BY_USER = gql`
query chanels($owner: ID){
   getChanel(owner:$owner){
        name
    }
  }

`;

export {
  GET_CHANEL_BY_USER
}