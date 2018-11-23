import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import { errorReducer } from "./ErrorReducer";
import {UploadReducer} from './UploadReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  loadingBar: loadingBarReducer,
  auth: authReducer,
  errors: errorReducer,
  upload: UploadReducer
});
