import axios from "axios";
import {PROGRESS_UPDATE_SUCCESS} from '../types/types'

const progressUpdate = (progress) => {
  return{
    type: PROGRESS_UPDATE_SUCCESS,
    payload: progress
  }
}

export const progress =(file)=>(dispatch)=>{
  const options = {
    headers:{
      "content-type": file.type
    },
    onUploadProgress: (progressEvent) => {
      let progressCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total);
      console.log(progressCompleted, "=====checkon========")
      dispatch(progressUpdate(progressCompleted))
    },
  }
  axios.post('https://httpbin.org/post', file, options).then(res=> console.log(res.data))
  .catch(err => console.log(err.response.data))
}