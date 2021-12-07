import React from "react";
import { useField, FieldHookConfig } from "formik";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  classes?: Partial<Record<"root" | "input" | "label", string>>;
  name: string;
  type?: "number" | "text";
  disabled?: boolean;
}

const TextInput: React.FunctionComponent<Props> = (props) => {
  const { label, classes, type, disabled, ...rest } = props;
  const [field, { error }] = useField(props as unknown as FieldHookConfig<any>);

  return (
    <div className={clsx(classes?.root || "w-full")}>
      {label && (
        <label
          htmlFor="price"
          className={clsx(
            classes?.label || "block ",
            "text-sm font-medium",
            disabled ? "text-gray-400" : "text-gray-700"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          className={clsx(
            "px-1.5 py-1.5  border-2 700 block w-full pr-3 sm:text-sm border-gray-300 rounded-md",
            disabled
              ? "bg-gray-200 text-gray-500"
              : "hover:ring-purple-500 hover:border-purple-700"
          )}
          disabled={disabled}
          {...rest}
          {...field}
        />
        {error && (
          <span
            className={clsx(
              error ? "text-red-500" : "text-purple-700",
              "text-xs"
            )}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
