/* eslint-disable prettier/prettier */
import {SET_USER_EMAIL, SET_USER_NAME, SET_USER_PASSWORD} from './action';

const initialState = {
  name: '',
  email: '',
  passowrd: '',
};

export default function UserReducer(state:any = initialState, action:any) {
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload};
        case SET_USER_EMAIL:
            return {...state, email: action.payload};
        case SET_USER_PASSWORD:
            return {...state, passowrd: action.payload};
            default:
                return state;
    }
}

