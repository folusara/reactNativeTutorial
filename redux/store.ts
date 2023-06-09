/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import NameReducer from './nameSlice';
import CountReducer from './countSlice';
import TasksReducer from './TasksSlice';

export const store = configureStore({
  reducer: {
    name: NameReducer,
    count: CountReducer,
    Tasks: TasksReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

