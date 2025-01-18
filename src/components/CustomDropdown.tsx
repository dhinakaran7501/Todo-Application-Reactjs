import { RiArrowDropDownLine } from "react-icons/ri";
import { DropdownProps } from "../@types/component";

export default function Dropdown({
  title = "",
  isRequired = false,
  options,
  value,
  placeholder = "Select an option",
  onChangeText,
  isDisabled = false,
  errText,
}: DropdownProps) {
  console.log(errText);
  return (
    <>
      <div className="relative w-full">
        {title && (
          <p className="font-semibold capitalize mb-1 text-[var(--text-color)]">
            {title}{" "}
            {isRequired && <span className="text-red-600 font-bold">*</span>}
          </p>
        )}

        <select
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          disabled={isDisabled}
          className={`${
            errText ? "border-red-500" : "border-[var(--border-color)]"
          } appearance-none w-full text-md bg-transparent border-2 ${
            isDisabled ? " cursor-not-allowed" : "border-[var(--border-color)]"
          } rounded px-4 py-1 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option
            value=""
            disabled
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <RiArrowDropDownLine className="w-5 h-5 absolute top-[35px] right-[10px] pointer-events-none text-[var(--text-color)]" />
        {errText && <p className="text-red-500 text-sm">{errText}</p>}
      </div>
    </>
  );
}
