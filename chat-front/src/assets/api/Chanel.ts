import { gql } from "@apollo/client";
import { User } from "./User";
import React from "react";
export interface Chanel {
  _id: string
  name: string,
  participants: User[]
};

export type ChanelType = {
  chanels: Chanel[],
  numChanels: Number
}

export type ChanelProps = {
  participants: User[],
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  idChanel: string
}


const GET_CHANEL_BY_USER = gql`
query getChanels($userId: ID){
  getChanels(userId: $userId){
    chanels{
      name
      _id
      participants{
        username
        _id
      }
    }
    numChanels
  }
}
`;

export {
  GET_CHANEL_BY_USER
}