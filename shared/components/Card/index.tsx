import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Card: React.FunctionComponent<Props> = ({className, children}) => {
  return (
    <div
      className={clsx("flex flex-col shadow-2xl p-5 items-center", className)}
    >
      {children}
    </div>
  );
};

export default Card;
