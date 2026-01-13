import React from "react";
import clsx from "clsx";

const Badge = ({
  label = "crack",
  mode = "pass", // "pass" | "reject"
  className = "",
}) => {
  const modeClasses = {
    pass: `
      text-[var(--pass)]
      bg-[var(--pass-background)]
    `,
    reject: `
      text-[var(--error)]
      bg-[var(--error-background)]
     
    `,
    neutral: `
    font-semibold text-[var(--text-accent)]
  `,
  };

  return (
    <span
      className={clsx(
        `
        text-xs px-3 ml-1
        rounded-4xl
        whitespace-nowrap
        `,
        modeClasses[mode],
        className
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
