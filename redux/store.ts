/* eslint-disable prettier/prettier */
import {createStore, configureStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from './reducer';
import { logActions } from './middlewares';

const rootReducer =  combineReducers({userReducer});

export const Store =  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logActions)),
); 