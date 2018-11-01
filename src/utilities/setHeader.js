import axios from 'axios';

const setAuthHeader = (token) => {
  if(token){
   return axios.defaults.headers.common['Authorization'] = 'token'+ token
  }
  delete axios.defaults.headers.common['Authorization'];
}

export default setAuthHeader;