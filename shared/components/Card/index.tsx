import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Card: React.FunctionComponent<Props> = ({className, children}) => {
  return (
    <div
      className={clsx("flex flex-col shadow-lg p-5 items-center", className)}
    >
      {children}
    </div>
  );
};

export default Card;
