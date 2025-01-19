import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import { TaskProps } from "../@types/component";
import CustomTable from "../components/CustomTable";
import { useTaskDetails } from "../utils/storeData";
import { Tag } from "antd";

export default function Dashboard() {
  const taskDetails = useTaskDetails();

  const [dashboardCount, setDashboardCount] = useState({
    yetToStart: 0,
    inProgress: 0,
    completed: 0,
  });

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

  interface DataType {
    tags: string[];
  }

  const columns = [
    {
      title: "S.No",
      key: "sno",
      render: (_: any, __: any, index: number) => <span>{index + 1}.</span>,
    },
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Assigned User",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "tags",
      render: (_: any, { tags }: DataType) => (
        <>
          {tags.map((tag: string) => {
            const colorClass =
              tag.toLowerCase() === "high"
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white";
            return (
              <Tag
                className={`rounded px-2 py-1 text-sm ${colorClass}`}
                key={tag}
              >
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const transformedData = taskDetails?.map((item) => ({
    key: item.id,
    name: item.title,
    dueDate: item?.dueDate,
    address: item.assignedUser,
    tags: [item.priority],
  }));

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
      <h1 className="my-3 text-[var(--text-color)] text-lg font-bold">
        Task Lists:
      </h1>
      <div>
        <CustomTable columns={columns} transformedData={transformedData} />
      </div>
    </>
  );
}

// import { Table } from "antd";
// import { useEffect, useState } from "react";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import { MdDone } from "react-icons/md";
// import DashboardCard from "../components/DashboardCard";
// import { TaskProps } from "../@types/component";
// import { fetchPaginatedTasks } from "../services/TaskService";
// import { useTaskDetails } from "../utils/storeData";

// export default function Dashboard() {
//   const taskDetails = useTaskDetails();

//   const [dashboardCount, setDashboardCount] = useState({
//     yetToStart: 0,
//     inProgress: 0,
//     completed: 0,
//   });

//   const [paginatedData, setPaginatedData] = useState<TaskProps[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalTasks, setTotalTasks] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchTasks(currentPage, pageSize);
//   }, [currentPage, pageSize, taskDetails]);

//   useEffect(() => {
//     const yetToStartCount = paginatedData.filter(
//       (task: TaskProps) => task.status.toLowerCase() === "yet to start"
//     ).length;

//     const inProgressCount = paginatedData.filter(
//       (task: TaskProps) => task.status.toLowerCase() === "in-progress"
//     ).length;

//     const completedCount = paginatedData.filter(
//       (task: TaskProps) => task.status.toLowerCase() === "done"
//     ).length;

//     setDashboardCount({
//       yetToStart: yetToStartCount,
//       inProgress: inProgressCount,
//       completed: completedCount,
//     });
//   }, [paginatedData]);

//   const fetchTasks = async (page: number, limit: number) => {
//     setIsLoading(true);
//     try {
//       const apiResponse = await fetchPaginatedTasks(page, limit);
//       setPaginatedData(apiResponse?.data);
//       setTotalTasks(taskDetails?.length);
//     } catch (error) {
//       console.error("Failed to fetch tasks:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const columns = [
//     {
//       title: "S.No",
//       key: "sno",
//       render: (_: any, __: any, index: number) =>
//         (currentPage - 1) * pageSize + index + 1,
//     },
//     {
//       title: "Task Name",
//       dataIndex: "title",
//       key: "title",
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: "Due Date",
//       dataIndex: "dueDate",
//       key: "dueDate",
//     },
//     {
//       title: "Assigned User",
//       dataIndex: "assignedUser",
//       key: "assignedUser",
//     },
//     {
//       title: "Priority",
//       key: "priority",
//       dataIndex: "priority",
//       render: (priority: string) => (
//         <span
//           className={`rounded px-2 py-1 text-sm ${
//             priority.toLowerCase() === "high"
//               ? "bg-red-600 text-white"
//               : "bg-green-600 text-white"
//           }`}
//         >
//           {priority.toUpperCase()}
//         </span>
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="grid grid-cols-4 gap-4">
//         <DashboardCard
//           title="Yet to Start"
//           count={dashboardCount.yetToStart}
//           icon={<FaRegCalendarAlt />}
//           bgColor="bg-gray-900"
//         />

//         <DashboardCard
//           title="In Progress"
//           count={dashboardCount.inProgress}
//           icon={<FiClock />}
//           bgColor="bg-blue-900"
//         />

//         <DashboardCard
//           title="Completed"
//           count={dashboardCount.completed}
//           icon={<MdDone />}
//           bgColor="bg-green-900"
//         />
//       </div>
//       <h1 className="my-3 text-[var(--text-color)] text-lg font-bold">
//         Task Lists:
//       </h1>
//       <Table
//         columns={columns}
//         dataSource={paginatedData}
//         pagination={{
//           current: currentPage,
//           pageSize: pageSize,
//           total: totalTasks,
//           onChange: (page, pageSize) => {
//             setCurrentPage(page);
//             setPageSize(pageSize);
//           },
//         }}
//         loading={isLoading}
//         className="custom-table border border-[var(--border-color)] rounded-lg"
//       />
//     </>
//   );
// }
