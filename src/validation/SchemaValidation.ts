import * as Yup from "yup";

export const taskValidationSchema = Yup.object().shape({
  id: Yup.string().required("Id is required"),
  title: Yup.string()
    .required("Task title is required")
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title cannot exceed 100 characters"),
  dueDate: Yup.date()
    .required("Due date is required")
    .min(new Date(), "Due date cannot be in the past"),
  assignedUser: Yup.string().required("Assigned user is required"),
  priority: Yup.string()
    .required("Priority is required")
    .oneOf(["High", "Low"], "Invalid priority"),
  description: Yup.string()
    .required("Task description is required")
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(
      ["yet to start", "in-progress", "done"],
      "Invalid status. Allowed values are: yet to start, in-progress, done"
    ),
});
