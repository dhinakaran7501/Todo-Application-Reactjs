import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputBoxProps {
  id: string;
  label: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSecure?: boolean;
  onToggleVisibility?: () => void;
  isShowPassword?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  touched,
  onChange,
  isSecure = false,
  onToggleVisibility,
  isShowPassword = false,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-medium mb-1">
        {label}
      </label>
      <div
        className={`flex items-center  rounded-md border-2 ${
          error && touched ? "border-red-500" : "border-gray-300"
        } focus-within:border-blue-500`}
      >
        <input
          id={id}
          type={isSecure && isShowPassword ? "text" : type}
          className="p-2 w-full outline-none focus:outline-none border-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isSecure && value && (
          <span
            className="cursor-pointer px-2 text-lg text-gray-600"
            onClick={onToggleVisibility}
          >
            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {error && touched && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputBox;
