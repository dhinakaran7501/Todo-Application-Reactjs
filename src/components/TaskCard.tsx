import { MdDelete, MdEdit } from "react-icons/md";
import ToDoImage from "../assets/todo.png";
import InProgressImage from "../assets/progress.png";
import CompletedImage from "../assets/completed.png";
import { TaskProps } from "../@types/component";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export default function TaskCard({
  task,
  onPressDelete,
  onPressEdit,
}: {
  task: TaskProps;
  onPressDelete: any;
  onPressEdit: any;
}) {
  const getImage = () => {
    switch (task?.status.toLowerCase()) {
      case "yet to start":
        return ToDoImage;
      case "in-progress":
        return InProgressImage;
      case "done":
        return CompletedImage;
      default:
        return ToDoImage;
    }
  };

  const getStatusColor = () => {
    switch (task?.status.toLowerCase()) {
      case "yet to start":
        return "bg-[#F87171]";
      case "in-progress":
        return "bg-[#3B82F6]";
      case "done":
        return "bg-[#34D399]";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = () => {
    switch (task?.priority.toLowerCase()) {
      case "high":
        return "bg-[#F97316] text-white";
      case "low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div
      key={task.id}
      className="bg-[var(--main-subNav-bg)] text-[var(--text-color)] shadow-md rounded-lg w-full border border-[var(--border-color)] overflow-hidden"
    >
      <div className="flex items-center justify-between  gap-4 p-4 border-b border-[var(--border-color)]">
        <div className="flex items-center ">
          <div className=" bg-[var(--main-subNav-bg)] p-2 rounded">
            <img
              src={getImage()}
              alt="App Icon"
              className="w-10 h-10 object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              {task.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-1 w-[260px]">
              {task.description}
            </p>
          </div>
        </div>
        <div
          className={`${getPriorityColor()} flex items-center gap-1 px-4 py-1 rounded-full`}
        >
          <div
            className={`${getPriorityColor()} w-2 h-2 rounded-full border animate-pulse`}
          ></div>
          <span className="capitalize text-white text-sm">{task.priority}</span>
        </div>
      </div>

      <div className="p-4 flex justify-around gap-2 text-sm text-[var(--text-color)]">
        <div className="flex items-center gap-2">
          <AiOutlineClockCircle className="text-xl" />
          <div>
            <span className="font-medium">Due:</span>
            <span className="ml-1 ">{task.dueDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BiUser className="text-xl" />
          <div>
            <span className="font-medium">Assigned:</span>
            <span className="ml-1 ">{task.assignedUser}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center p-4 border-t border-[var(--border-color)] text-2xl bg-[var(--card-footer-bg)]">
        <button
          className={`flex items-center gap-1 ${
            task?.status === "done"
              ? "text-gray-500 cursor-not-allowed"
              : "text-yellow-600 hover:text-yellow-700"
          } `}
          onClick={
            task?.status !== "done" ? () => onPressEdit(task) : undefined
          }
        >
          <MdEdit />
        </button>
        <span className="text-sm text-gray-400">|</span>
        <span
          className={`${getStatusColor()} text-sm text-white px-4 py-1 rounded-full min-w-20 text-center capitalize`}
        >
          {task?.status === "done" ? "Completed" : task?.status}
        </span>
        <span className="text-sm text-gray-400">|</span>
        <button
          className="flex items-center gap-1 text-red-600 hover:text-red-700"
          onClick={() => onPressDelete(task)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
