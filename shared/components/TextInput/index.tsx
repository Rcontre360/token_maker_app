import React from "react";
import {useField, FieldHookConfig} from "formik";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  classes?: Partial<Record<"root" | "input" | "label", string>>;
  name: string;
  type?: 'number' | 'text';
}

const TextInput: React.FunctionComponent<Props> = (props) => {
  const {label, classes, type, ...rest} = props;
  const [field, {error}] = useField(props as unknown as FieldHookConfig<any>);

  return (
    <div className={clsx(classes?.root || "w-full")}>
      {label && (
        <label
          htmlFor="price"
          className={clsx(
            classes?.label || "block text-gray-700",
            "text-sm font-medium"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          className="py-1.5 hover:ring-blue-400 hover:border-blue-400 border-2 focus:ring-blue-400 focus:border-blue-400 block w-full pr-3 sm:text-sm border-gray-300 rounded-md"
          {...rest}
          {...field}
        />
        {error && (
          <span
            className={clsx(
              error ? "text-red-500" : "text-blue-500",
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
