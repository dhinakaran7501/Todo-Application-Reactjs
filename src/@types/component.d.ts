export type CustomModalProps = {
  title: string;
  isOpen: boolean;
  onPressPositiveBtn?: any;
  onPressNegativeBtn?: any;
  onPressResetBtn?: any;
  positiveText?: string;
  negativeText?: string;
  ResetText?: string;
  renderContent: () => ReactNode;
};

export type TaskProps = {
  id: string;
  title: string;
  description: string;
  status: "yet to start" | "in-progress" | "done";
  dueDate: string;
  assignedUser: string;
  priority: "high" | "low";
};

export type LoaderProps = {
  isVisible: boolean;
};

export type DashboardCardProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  bgColor?: string;
};

export type TextInputBoxProps = {
  title?: string;
  disableFutureDate?: boolean;
  disablePastDate?: boolean;
  placeholder?: string;
  value: string;
  errText?: string;
  onChangeText: (value: string) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  type?: "text" | "password" | "email" | "date" | "number";
  icon?: "visibility" | "visibilityoff" | null;
  iconProps?: React.HTMLAttributes<HTMLElement>;
  onIconPress?: () => void;
  isSecure?: boolean;
  inputBoxType?: "input" | "textArea";
};

export type DropdownProps = {
  title: string;
  isRequired?: boolean;
  options: { label: string; value: string }[];
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  isDisabled?: boolean;
  errText?: string;
};
