import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { getAllTaskListsService } from "./services/TaskService";
import { getErrorMessage } from "./utils/helpers";
import { useDispatch } from "react-redux";
import { storeTaskDetails } from "./store/reducers/task/taskSlice";
import { getAllUser } from "./services/UserService";
import { storeUserDetails } from "./store/reducers/user/userSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTaskLists();
    getAllUserLists();
  }, []);

  const getTaskLists = async () => {
    try {
      const apiResponse = await getAllTaskListsService();
      const { status, data } = apiResponse ?? {};
      if (status === 200) {
        dispatch(storeTaskDetails([...data]));
      }
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const getAllUserLists = async () => {
    try {
      const apiResponse = await getAllUser();
      const { status, data } = apiResponse ?? {};
      if (status === 200) {
        dispatch(storeUserDetails([...data]));
      }
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return <RouterProvider router={router} />;
}
