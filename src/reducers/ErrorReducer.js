import { GET_ALL_ERRORS } from "../types/types";

const initialState = {}

export const errorReducer =(state =initialState, action)=>{
switch(action.type){
  case GET_ALL_ERRORS:
  return action.payload
  default:
  return state;
}
}
