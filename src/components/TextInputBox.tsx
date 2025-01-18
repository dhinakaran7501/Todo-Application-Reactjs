import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TextInputBoxProps } from "../@types/component";

export default function TextInputBox({
  title = "",
  disableFutureDate = false,
  disablePastDate = false,
  placeholder = "",
  value,
  errText = "",
  onChangeText,
  isRequired = false,
  isDisabled = false,
  type = "text",
  icon = null,
  iconProps,
  onIconPress,
  isSecure = false,
  inputBoxType = "input",
}: TextInputBoxProps) {
  const [isShowPassword, setisShowPassword] = useState(false);

  const getInputType = () => {
    if (isSecure) {
      return isShowPassword ? "text" : "password";
    }
    return type;
  };

  const IconType = {
    visibility: FaEye,
    visibilityoff: FaEyeSlash,
  };

  const Icons = ({
    icon,
    iconProps,
    onIconPress,
  }: {
    icon: "visibility" | "visibilityoff" | null;
    iconProps?: React.SVGProps<SVGSVGElement>;
    onIconPress?: React.MouseEventHandler<SVGElement>;
  }) => {
    const Icon = icon ? IconType[icon] : null;
    return Icon ? <Icon onClick={onIconPress} {...iconProps} /> : null;
  };

  return (
    <div className="overflow-hidden">
      {title && (
        <p className="font-semibold capitalize mb-1 text-[var(--text-color)]">
          {title}{" "}
          {isRequired && <span className="text-red-600 font-bold">*</span>}
        </p>
      )}

      {inputBoxType === "input" && (
        <div
          className={`${
            errText ? "border-red-500" : "border-[var(--border-color)]"
          } border-2 flex items-center focus-within:border-blue-500 transition-colors duration-300 ease-in-out bg-transparent rounded text-[var(--text-color)`}
        >
          <input
            type={getInputType()}
            placeholder={placeholder}
            onChange={(event) => onChangeText(event.target.value)}
            disabled={isDisabled}
            value={value}
            max={
              disableFutureDate ? new Date().toISOString().split("T")[0] : ""
            }
            min={
              type === "date" && disablePastDate
                ? new Date().toISOString().split("T")[0]
                : undefined
            }
            style={{
              color: "var(--text-color)",
            }}
            className="flex-1 px-3 py-1 bg-transparent focus:outline-none"
          />
          {icon && (
            <div className="px-3">
              <Icons
                onIconPress={() => {
                  if (isSecure) {
                    setisShowPassword((prev) => !prev);
                  } else if (onIconPress) {
                    onIconPress();
                  }
                }}
                icon={
                  isSecure
                    ? isShowPassword
                      ? "visibility"
                      : "visibilityoff"
                    : icon
                }
                {...iconProps}
              />
            </div>
          )}
        </div>
      )}

      {inputBoxType === "textArea" && (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChangeText(event.target.value)}
          className={`mt-1 block w-full px-3 py-2 min-h-36 resize-none transition-colors duration-300 ease-in-out border-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-transparent text-[var(--text-color)] ${
            errText ? "border-red-500" : "border-[var(--border-color)]"
          }`}
        />
      )}

      {errText && <p className="text-red-500 text-sm">{errText}</p>}
    </div>
  );
}
