import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import { errorReducer } from "./ErrorReducer";
import {UploadReducer} from './UploadReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  upload: UploadReducer
});
