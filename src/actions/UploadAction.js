import axios from "axios";
import {UPLOAD_DATA_SUCCESS, GET_ALL_UPLOAD_SUCCESS} from '../types/types'
import {config} from '../config';

const uploadDataSucess = (uploadData) => {
  return{
    type: UPLOAD_DATA_SUCCESS,
    payload: uploadData
  }
}
const getAllUpload = (data) => {
  return{
    type: GET_ALL_UPLOAD_SUCCESS,
    payload: data
  }
}
//action for form upload
export const uploadData =(data, file)=>(dispatch)=>{
  const options = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  let fd = new FormData()
  file.map((file) => {
    return fd.append('File[]',file);
  });

  for (const key of Object.keys(data)) {
    fd.append(key, data[key]);
  }
  axios.post(`${config.API_BASE_URL}/media/`, fd, options)
  .then(res => dispatch(uploadDataSucess(res.data)))
  .catch(err => console.log(err.response.data))
}

export const getUpload = () => (dispatch) => {
  axios.get(`${config.API_BASE_URL}/media/`).then(res => dispatch(getAllUpload(res.data))).catch(err => console.log(err.response.data))
}