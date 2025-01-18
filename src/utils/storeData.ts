import { useSelector } from "react-redux";
import { TaskProps } from "../@types/component";
import { UserProps } from "../@types/pages";

interface TaskListsProps {
  taskLists: {
    tasks: TaskProps[];
  };
}

interface UserListsProps {
  userLists: {
    users: UserProps[];
  };
}
export const useTaskDetails = () => {
  return useSelector((state: TaskListsProps) => state.taskLists.tasks);
};

export const useUserDetails = () => {
  return useSelector((state: UserListsProps) => state.userLists.users);
};
