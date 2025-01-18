import { combineReducers } from "@reduxjs/toolkit";
import TaskReducer from "./task/taskSlice";
import UserReducer from "./user/userSlice";

export const rootReducer = combineReducers({
  taskLists: TaskReducer,
  userLists: UserReducer,
});
