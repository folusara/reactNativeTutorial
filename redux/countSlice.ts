/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const countSlice = createSlice({
  // eslint-disable-next-line quotes
  name: "count",
  initialState: {
    count:0,
    countType: '',
  },
  reducers: {
    setCount(state, action: PayloadAction<number>) {
        state.count += action.payload;
      },
      setCountType(state, action: PayloadAction<string>){
        state.countType = action.payload;
      },
  },
});

export const { setCount } = countSlice.actions;
export const {setCountType} = countSlice.actions;
export default countSlice.reducer;
