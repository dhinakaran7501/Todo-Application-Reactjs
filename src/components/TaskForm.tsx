import { useEffect, useState } from "react";
import TextInputBox from "./TextInputBox";
import Dropdown from "./CustomDropdown";
import { useTaskDetails, useUserDetails } from "../utils/storeData";
import { DropdownOptionProps } from "../@types/pages";
import { priorityLists, statusDropDownLists } from "../utils/constant";

export default function TaskForm({
  values,
  handleChange,
  errors,
  touched,
}: any) {
  const userDetails = useUserDetails();
  const taskDetails = useTaskDetails();

  const [dropdownOptions, setdropdownOptions] = useState<DropdownOptionProps>({
    assignUser: [],
    taskID: [],
  });

  useEffect(() => {
    getDropDownOptions();
  }, [userDetails, taskDetails]);

  const getDropDownOptions = () => {
    if (userDetails?.length > 0) {
      const data = [...userDetails]?.map((item) => ({
        label: item?.first_name,
        value: item?.first_name,
      }));

      setdropdownOptions({
        ...dropdownOptions,
        assignUser: [...data],
      });
    }
    if (taskDetails?.length > 0) {
      const existingTaskIDs = taskDetails.map((task) => Number(task.id));
      const maxTaskCount = 50;

      const taskIDOptions = Array.from(
        { length: maxTaskCount },
        (_, index) => index + 1
      )
        .filter((id) => !existingTaskIDs.includes(id))
        .map((id) => ({
          label: id.toString(),
          value: id.toString(),
        }));

      setdropdownOptions((prev) => ({
        ...prev,
        taskID: [...taskIDOptions],
      }));
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <Dropdown
          title="Task ID"
          isRequired
          options={dropdownOptions?.taskID}
          value={values?.id}
          placeholder="Choose an ID"
          onChangeText={handleChange("id")}
          errText={errors.id && touched.id ? errors.id : ""}
        />
        <TextInputBox
          value={values?.title}
          title="Title"
          placeholder="Enter a task title"
          isRequired
          onChangeText={handleChange("title")}
          errText={errors.title && touched.title ? errors.title : ""}
        />
      </div>
      <div className=" mt-3 grid grid-cols-2 gap-2">
        <TextInputBox
          value={values?.dueDate}
          title="Due Date"
          type="date"
          disablePastDate
          isRequired
          onChangeText={handleChange("dueDate")}
          errText={errors.dueDate && touched.dueDate ? errors.dueDate : ""}
        />
        <Dropdown
          title="Assign task"
          value={values?.assignedUser}
          isRequired
          options={dropdownOptions?.assignUser}
          placeholder="Choose an option"
          onChangeText={handleChange("assignedUser")}
          errText={
            errors.assignedUser && touched.assignedUser
              ? errors.assignedUser
              : ""
          }
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Dropdown
          title="Priority"
          value={values?.priority}
          isRequired
          options={priorityLists}
          placeholder="Choose an option"
          onChangeText={handleChange("priority")}
          errText={errors.priority && touched.priority ? errors.priority : ""}
        />
        <Dropdown
          title="Current Status"
          value={values?.status}
          isRequired
          options={statusDropDownLists}
          placeholder="Choose an option"
          onChangeText={handleChange("status")}
          errText={errors.status && touched.status ? errors.status : ""}
        />
      </div>
      <div className="mt-3">
        <TextInputBox
          value={values?.description}
          title="Description"
          inputBoxType="textArea"
          placeholder="Enter a task description..."
          isRequired
          onChangeText={handleChange("description")}
          errText={
            errors.description && touched.description ? errors.description : ""
          }
        />
      </div>
    </>
  );
}
