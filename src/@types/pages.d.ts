export type UserProps = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

export type DropdownOptionProps = {
  assignUser: {
    label: string;
    value: string;
  }[];
  taskID: {
    label: string;
    value: string;
  }[];
};

export type CreateTaskProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  assignedUser: string;
  priority: string;
};
