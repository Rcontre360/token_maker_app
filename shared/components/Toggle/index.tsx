import React from "react";
import clsx from "clsx";

interface Props {
  on?: boolean;
  label?: string;
  classes?: Partial<Record<"root" | "input" | "label", string>>;
}

const Toggle: React.FunctionComponent<Props> = (props) => {
  const {label, on, classes} = props;
  return (
    <div className={clsx(classes?.root || "flex items-center justify-center")}>
      {label && <span className="text-sm mr-4"> {label}</span>}
      <input type="checkbox" name="toggle" className="hidden" />
      <label
        className="relative w-12 h-6 flex select-none cursor-pointer"
        htmlFor="toggle"
      >
        <span
          className="
        absolute
        left-0
        top-0
        h-full
        w-full
        bg-gray-300
        rounded-full
        bg-gray-300
      "
        ></span>
        <span
          className="
        h-6
        w-6
        border-2
        absolute
        z-10
        rounded-full
        bg-white
        transition-transform
        duration-300
        ease-in-out
        flex
        justify-center
        items-center
        border-gray-300
      "
        ></span>
      </label>
    </div>
  );
};

export default Toggle;
