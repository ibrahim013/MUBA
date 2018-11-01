import { IS_LOADING, SIGN_UP_USER, GET_ALL_ERRORS, LOGIN_USER_SUCCESS } from '../types/types'
import isEmpty from '../helper/isEmpty';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {}
}
const AuthReducer = (state=initialState, action) => {
  switch(action.type){
    case IS_LOADING:
    return{
      ...state,
      isLoading: true
    }
    case SIGN_UP_USER:
    return{
      ...state,
      isLoading: false,
    }
    case LOGIN_USER_SUCCESS:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
    }
    case GET_ALL_ERRORS:
    return{
      ...state,
      isLoading: false,
    }

    default:
    return state
  }
 
  }
export default AuthReducer;