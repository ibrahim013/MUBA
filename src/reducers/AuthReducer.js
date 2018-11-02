import { IS_LOADING, SIGN_UP_USER, GET_ALL_ERRORS, LOGIN_USER_SUCCESS, LOAD_USER_PROFILE_SUCCESS } from '../types/types'
import isEmpty from '../helper/isEmpty';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  profile: {}
  
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
      user: action.payload,
    }
    case LOAD_USER_PROFILE_SUCCESS:
    return{
      ...state,
      profile: action.payload
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