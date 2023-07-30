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
  participants: User[],
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string
}


const GET_CHANEL_BY_USER = gql`
query getChanels($userId: ID){
  getChanels(userId: $userId){
    chanels{
      name
      id
      participants{
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