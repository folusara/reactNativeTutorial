/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
  // eslint-disable-next-line quotes
  name: "Tasks",
  initialState: {
    Tasks: <any>[],
    TaskId: 0,
  },
  reducers: {
    setTask(state, action: PayloadAction<any[]>) {
        state.Tasks = action.payload;
      },
      setTaskId(state, action: PayloadAction<number>){
        state.TaskId += action.payload
      },
  },
});

export const { setTaskId } = TasksSlice.actions;
export const { setTask } = TasksSlice.actions;
export default TasksSlice.reducer;
