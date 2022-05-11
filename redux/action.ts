/* eslint-disable prettier/prettier */
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

export const  setName = (name :string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    })
};

export const  setEmail = (email:string)  => (dispatch:any) => {
    dispatch({
        type: SET_USER_EMAIL ,
        payload: email,
    })
};

export const  setPassword = (password:string) => (dispatch:any) => {
    dispatch({
        type: SET_USER_PASSWORD ,
        payload: password,
    })
};

