import axios from 'axios';
import { config } from '../config'
import { SIGN_UP_USER, GET_ALL_ERRORS, IS_LOADING, LOGIN_USER_SUCCESS, LOAD_USER_PROFILE_SUCCESS } from '../types/types'
import setAuthHeader from '../utilities/setHeader'
import jwt_decode from "jwt-decode";


//Loading thunk 
export const isLoading = () => {
  return{
    type: IS_LOADING
  }
}
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

//Login user thunk
export const loginUserSuccess = (userData) => {
return{
  type: LOGIN_USER_SUCCESS,
  payload: userData
}
}
//Login user thunk
export const loadUserProfile = (userProfile) => {
  return{
    type: LOAD_USER_PROFILE_SUCCESS,
    payload: userProfile
  }
  }

//signup user
export const signUpUser = (userData, history) => (dispatch) => {
  dispatch(isLoading())
  axios.post(`${config.API_BASE_URL}/registration/`, userData)
  .then(
    (res) =>{
      dispatch(signUpUserDetails(res.data))
      if(res.data.detail){
        history.push('/email-confirmation')
      }
    }
  ).catch(err =>{
    dispatch(setUserError(err.response.data))
  })
}

//Login User
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(isLoading());
  axios.post(`${config.API_BASE_URL}/login/`, userData).then(
    res => {
      const {token, user} = res.data
      localStorage.setItem("token", token);
      setAuthHeader(token);
      //decode token
      const decodedToken = jwt_decode(token);
      //dispatch decoded token to redux store
      dispatch(loginUserSuccess(decodedToken));
      dispatch(loadUserProfile(user))
      history.push('/dashboard')
    }
  ).catch(err => {
    dispatch(setUserError(err.response.data))
  })
}
//Logout User
export const logoutUser = () => dispatch => {
  axios.post(`${config.API_BASE_URL}/logout/`)
  .then(() => {
  //remove token from local storage
  localStorage.removeItem("token");
  //remove from authorization header
  setAuthHeader(false);
  window.location.href="/login"
  })
};