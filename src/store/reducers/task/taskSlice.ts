import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };

export const { reducer, actions } = createSlice({
  name: "TaskLists",
  initialState,
  reducers: {
    storeTaskDetails: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { storeTaskDetails } = actions;
export default reducer;
