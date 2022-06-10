/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import NameReducer from './nameSlice';
import CountReducer from './countSlice';

export const store = configureStore({
  reducer: {
    name: NameReducer,
    count: CountReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

