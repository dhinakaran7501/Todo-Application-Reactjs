import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { TaskProps } from "../@types/component";
import {
  createTaskService,
  deleteTaskService,
  getFilteredTasks,
  updateTaskService,
} from "../services/TaskService";
import { getErrorMessage, toastMessage } from "../utils/helpers";
import Loader from "../components/loader";
import CustomModal from "../components/CustomModal";
import { useTaskDetails } from "../utils/storeData";
import TaskForm from "../components/TaskForm";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { storeTaskDetails } from "../store/reducers/task/taskSlice";
import { taskValidationSchema } from "../validation/SchemaValidation";
import Dropdown from "../components/CustomDropdown";
import { priorityLists, statusDropDownLists } from "../utils/constant";

interface ModalProps {
  isDelete: boolean;
  isAction: boolean;
  data?: any;
}

const statusOptionsWithAll = [
  { label: "All", value: "All" },
  ...statusDropDownLists,
];
const priorityOptionsWithAll = [
  { label: "All", value: "All" },
  ...priorityLists,
];

export default function Lists() {
  const dispatch = useDispatch();
  const taskDetails = useTaskDetails();

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<ModalProps>({
    isDelete: false,
    isAction: false,
    data: null,
  });
  const [selectedTask, setselectedTask] = useState<string>("");
  const [filter, setFilter] = useState({
    status: "",
    priority: "",
  });

  useEffect(() => {
    if (taskDetails?.length > 0) {
      setTasks([...taskDetails]);
    }
  }, [taskDetails]);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
      id: "",
      title: "",
      dueDate: "",
      assignedUser: "",
      priority: "",
      description: "",
      status: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit: () => {
      if (isModal?.data) {
        handleUpdate();
      } else {
        handleCreate();
      }
    },
  });

  const isDuplicateTask = (
    tasks: TaskProps[],
    title: string,
    excludeId?: string
  ): boolean => {
    const normalizedTitle = title.split(" ").join("").toLowerCase();

    return tasks.some(
      (task) =>
        task.id !== excludeId &&
        task.title.split(" ").join("").toLowerCase() === normalizedTitle
    );
  };

  const handleCreate = async () => {
    setisLoading(true);
    try {
      if (isDuplicateTask(tasks, values?.title, values?.id)) {
        toastMessage("error", "Task with the same title already exists.");
        setisLoading(false);
        return;
      }
      const apiResponse = await createTaskService(values);
      const { data, status } = apiResponse ?? {};
      if (status === 201) {
        dispatch(storeTaskDetails([...taskDetails, data]));
        setTasks((prev) => [...prev, data]);
        toastMessage("success", "Task Created Successfully.");
        setIsModal({
          ...isModal,
          isAction: false,
          data: null,
        });
        resetForm();
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const handleDelete = async () => {
    setisLoading(true);
    try {
      const apiResponse = await deleteTaskService(selectedTask);
      const { status } = apiResponse ?? {};

      if (status === 200) {
        toastMessage("success", "Task Deleted Successfully.");
        const updatedTasks = tasks.filter(
          (task: TaskProps) => task?.id.toString() !== selectedTask
        );
        dispatch(storeTaskDetails(updatedTasks));
        setTasks(updatedTasks);
        setIsModal({
          ...isModal,
          isDelete: false,
        });
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const handleUpdate = async () => {
    setisLoading(true);
    try {
      if (isDuplicateTask(tasks, values.title, selectedTask)) {
        toastMessage("error", "Task with the same title already exists.");
        setisLoading(false);
        return;
      }
      const apiResponse = await updateTaskService(selectedTask, values);
      const { status, data } = apiResponse ?? {};
      console.log(status);
      if (status === 200) {
        toastMessage("success", "Task Updated Successfully.");
        const updatedTasks = tasks.map((item) =>
          item.id === selectedTask ? { ...item, ...data } : item
        );
        dispatch(storeTaskDetails(updatedTasks));
        setTasks([...updatedTasks]);
        setIsModal({
          ...isModal,
          isAction: false,
          data: null,
        });
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const handlePriority = async (priority: string) => {
    setisLoading(true);
    try {
      const query = priority === "All" ? "" : `?priority=${priority}`;
      const apiResponse = await getFilteredTasks(query);
      console.log(apiResponse?.data);
      const { status: apiStatus, data } = apiResponse ?? {};
      if (apiStatus === 200) {
        setTasks(data);
        setFilter((prev) => ({
          ...prev,
          priority,
        }));
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const handleStatus = async (status: string) => {
    setisLoading(true);
    try {
      const query = status === "All" ? "" : `?status=${status}`;
      const apiResponse = await getFilteredTasks(query);
      console.log(apiResponse?.data);
      const { status: apiStatus, data } = apiResponse ?? {};
      if (apiStatus === 200) {
        setTasks(data);
        setFilter((prev) => ({
          ...prev,
          status,
        }));
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-end justify-end gap-3 w-full px-4 border-b border-[var(--border-color)] pb-2">
        <div className="w-[12%]">
          <Dropdown
            title="Status :"
            options={statusOptionsWithAll}
            value={filter?.status || "All"}
            placeholder="Select Status"
            onChangeText={handleStatus}
          />
        </div>
        <div className="w-[12%]">
          <Dropdown
            title="Priority :"
            options={priorityOptionsWithAll}
            value={filter?.priority || "All"}
            placeholder="Select Priority"
            onChangeText={handlePriority}
          />
        </div>

        <button
          type="button"
          className=" border border-[var(--border-color)] px-4 py-2 text-white rounded-md bg-green-600 hover:bg-green-700 transition-all"
          onClick={() =>
            setIsModal({
              ...isModal,
              isAction: true,
            })
          }
        >
          Create Tasks
        </button>
      </div>
      {tasks?.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 p-4 max-h-[calc(100vh-189px)] overflow-y-scroll">
          {tasks.map((item, index) => (
            <TaskCard
              task={item}
              key={index}
              onPressDelete={(data: TaskProps) => {
                setIsModal({
                  ...isModal,
                  isDelete: true,
                });
                setselectedTask(data?.id);
              }}
              onPressEdit={(data: TaskProps) => {
                setIsModal({
                  ...isModal,
                  isAction: true,
                  data: data,
                });
                setValues({ ...data });
                setselectedTask(data?.id);
              }}
            />
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center h-[84vh] text-[var(--text-color)] text-lg">
          No Task found.
        </p>
      )}

      {isModal?.isAction && (
        <CustomModal
          isOpen={isModal?.isAction}
          title={`${isModal?.data ? "Update" : "Create"} Task`}
          positiveText={`${isModal?.data ? "Update" : "Create"}`}
          onPressNegativeBtn={() => {
            setIsModal({
              ...isModal,
              isAction: false,
              data: null,
            });
            setselectedTask("");
            setValues({
              id: "",
              title: "",
              dueDate: "",
              assignedUser: "",
              priority: "",
              description: "",
              status: "",
            });
          }}
          onPressPositiveBtn={handleSubmit}
          renderContent={() => (
            <TaskForm
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
            />
          )}
        />
      )}
      {isModal?.isDelete && (
        <CustomModal
          isOpen={isModal?.isDelete}
          title="Delete Confirmation"
          positiveText="Delete"
          onPressNegativeBtn={() => {
            setIsModal({
              ...isModal,
              isDelete: false,
            });
            setselectedTask("");
          }}
          onPressPositiveBtn={handleDelete}
          renderContent={() => (
            <p className="text-[var(--text-color)] text-center w-[80%] mx-auto">
              Are you sure you want to delete this task? Once deleted, this
              action cannot be undone.
            </p>
          )}
        />
      )}
      <Loader isVisible={isLoading} />
    </>
  );
}
