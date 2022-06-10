/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  // eslint-disable-next-line quotes
  name: "name",
  initialState: {
    name:'Initial name',
  },
  reducers: {
    setName(state, action: PayloadAction<string>) {
        state.name = action.payload;
      },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;