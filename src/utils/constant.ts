import { FaClipboardList } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export const navMenusList = [
  {
    id: 1,
    name: "Dashboard",
    icon: TbLayoutDashboardFilled,
    navigate: "/todo/dashboard",
    title: "Welcome!",
  },
  {
    id: 2,
    name: "Lists",
    icon: FaClipboardList,
    navigate: "/todo/lists",
    title: "Task Lists",
  },
];

export const priorityLists = [
  { label: "High", value: "High" },
  { label: "Low", value: "Low" },
];

export const statusDropDownLists = [
  {
    label: "Yet To Start",
    value: "yet to start",
  },
  {
    label: "In-Progress",
    value: "in-progress",
  },
  {
    label: "Completed",
    value: "done",
  },
];
