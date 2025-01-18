import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import { TaskProps } from "../@types/component";
import Loader from "../components/loader";
import CustomTable from "../components/CustomTable";
import { useTaskDetails } from "../utils/storeData";

export default function Dashboard() {
  const taskDetails = useTaskDetails();

  const [dashboardCount, setDashboardCount] = useState({
    yetToStart: 0,
    inProgress: 0,
    completed: 0,
  });
  // const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    const yetToStartCount = [...taskDetails]?.filter(
      (task: TaskProps) => task.status.toLowerCase() === "yet to start"
    ).length;

    const inProgressCount = [...taskDetails]?.filter(
      (task: TaskProps) => task.status.toLowerCase() === "in-progress"
    ).length;

    const completedCount = [...taskDetails]?.filter(
      (task: TaskProps) => task.status.toLowerCase() === "done"
    ).length;

    setDashboardCount({
      yetToStart: yetToStartCount,
      inProgress: inProgressCount,
      completed: completedCount,
    });
  }, [taskDetails]);

  // const getTaskLists = async () => {
  //   setisLoading(true);
  //   try {
  //     const apiResponse = await getAllTaskListsService();
  //     const { status, data } = apiResponse ?? {};
  //     if (status === 200) {
  //       const yetToStartCount = data.filter(
  //         (task: TaskProps) => task.status.toLowerCase() === "yet to start"
  //       ).length;

  //       const inProgressCount = data.filter(
  //         (task: TaskProps) => task.status.toLowerCase() === "in-progress"
  //       ).length;

  //       const completedCount = data.filter(
  //         (task: TaskProps) => task.status.toLowerCase() === "done"
  //       ).length;

  //       setDashboardCount({
  //         yetToStart: yetToStartCount,
  //         inProgress: inProgressCount,
  //         completed: completedCount,
  //       });
  //     } else {
  //       toastMessage("error", "No Data found.");
  //     }
  //   } catch (error) {
  //     getErrorMessage(error);
  //   } finally {
  //     setisLoading(false);
  //   }
  // };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <DashboardCard
          title="Yet to Start"
          count={dashboardCount?.yetToStart}
          icon={<FaRegCalendarAlt />}
          bgColor="bg-gray-900"
        />

        <DashboardCard
          title="In Progress"
          count={dashboardCount?.inProgress}
          icon={<FiClock />}
          bgColor="bg-blue-900"
        />

        <DashboardCard
          title="Completed"
          count={dashboardCount?.completed}
          icon={<MdDone />}
          bgColor="bg-green-900"
        />
      </div>
      {/* <button type="button">Create task</button> */}
      <h1 className="my-3 text-[var(--text-color)] text-lg font-bold">
        Task Lists:
      </h1>
      <div>
        <CustomTable />
      </div>
      {/* <Loader isVisible={isLoading} /> */}
    </>
  );
}
