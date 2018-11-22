import {UPLOAD_DATA_SUCCESS, GET_ALL_UPLOAD_SUCCESS} from '../types/types'
const initialState ={}


export const UploadReducer =(state=initialState, action)=>{
  switch(action.type){
    case UPLOAD_DATA_SUCCESS:
    return{
      ...state,
      upload: action.payload
    }
    case GET_ALL_UPLOAD_SUCCESS:
    return{
      ...state,
      content: action.payload,
    }
    default:
    return state
  }
}