import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  last_name: Yup.string()
    .trim()
    .min(1, "Last name must be at least 1 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

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
