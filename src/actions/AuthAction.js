import axios from 'axios';
import { config } from '../config'
import { SIGN_UP_USER, GET_ALL_ERRORS } from '../types/types'


//Error thunk
export const setUserError = errors => {
  return {
    type: GET_ALL_ERRORS,
    payload: errors
  };
};

//Signup thunk
export const signUpUserDetails = (userData) =>{
return {
  type: SIGN_UP_USER,
  payload: userData
}
}

export const signUpUser = (userData) => (dispatch) => {
  axios.post(`${config.API_BASE_URL}/registration/`, userData)
  .then(
    (res) =>{
      dispatch(signUpUserDetails(res.data))
    }
  ).catch(err =>{
    dispatch(setUserError(err.response.data))
  })
}