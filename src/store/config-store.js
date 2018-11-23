import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from "../reducers/Rootreducer"

const middleware = [thunk, promiseMiddleware(), loadingBarMiddleware()];
const initialState = {};
const store = createStore(rootReducer, initialState, 
  composeWithDevTools(applyMiddleware(...middleware)))

export default store;