import React from "react";
import clsx from "clsx";

const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  readOnly = false,
  error = false,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(
        "w-full px-4 py-2 rounded-2xl outline-none text-sm text-[var(--text-primary)]",
        "bg-[var(--secondary)] placeholder:text-[var(--text-secondary)]",
        disabled && "opacity-60 cursor-not-allowed",
        error && "border border-[var(--error)]",
        className
      )}
      {...props}
    />
  );
};

export default Input;
