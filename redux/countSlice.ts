/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const countSlice = createSlice({
  // eslint-disable-next-line quotes
  name: "count",
  initialState: {
    count:0,
  },
  reducers: {
    setCount(state, action: PayloadAction<number>) {
        state.count += action.payload;
      },
  },
});

export const { setCount } = countSlice.actions;
export default countSlice.reducer;