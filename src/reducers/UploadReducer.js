import {PROGRESS_UPDATE_SUCCESS} from '../types/types'
const initialState ={}


export const UploadReducer =(state=initialState, action)=>{
  switch(action.type){
    case PROGRESS_UPDATE_SUCCESS:
    return{
      ...state,
      progress: action.payload
    }
    default:
    return state
  }
}