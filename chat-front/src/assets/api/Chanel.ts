import { gql } from "@apollo/client";
import { User } from "./User";

interface Chanel {
    id: string
    name: string,
    member?: User
};

export type ChanelType = Chanel[]

export type ChanelProps = {
    member: User,
    onClick: () => string
}


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