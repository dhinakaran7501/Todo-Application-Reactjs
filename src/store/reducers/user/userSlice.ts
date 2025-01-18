import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

export const { reducer, actions } = createSlice({
  name: "UserLists",
  initialState,
  reducers: {
    storeUserDetails: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { storeUserDetails } = actions;
export default reducer;
