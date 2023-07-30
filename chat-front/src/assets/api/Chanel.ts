import { gql } from "@apollo/client";
import { User } from "./User";
import React from "react";
export interface Chanel {
  id: string
  name: string,
  member: User
};

export type ChanelType = {
  chanels: Chanel[],
  numChanels: Number
}

export type ChanelProps = {
  member: User,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string
}


const GET_CHANEL_BY_USER = gql`
query getChanels($ownerId: ID){
  getChanels(ownerId:$ownerId){
    chanels{
      id
      name
      owner
      member{
        _id
        username
      }
     
    }
    numChanels
  }
}
`;

export {
  GET_CHANEL_BY_USER
}