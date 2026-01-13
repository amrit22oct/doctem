import React from "react";
import clsx from "clsx";

const Container = ({
  children,
  className = "",
  background = "bg-[var(--background)]",
  ...props // <- this allows passing onClick, style, etc.
}) => {
  return (
    <div className={clsx(background, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
