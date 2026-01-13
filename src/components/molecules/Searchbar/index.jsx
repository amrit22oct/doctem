import React from "react";
import clsx from "clsx";
import Container from "../../atoms/container";
import IconContainer from "../IconContainer";
import Input from "../../atoms/Input";

const SearchBar = ({
  icon = "FiSearch",               // default icon
  placeholder = "Search ‘RX Board’", // default placeholder
  className = "",                   // container additional classes
  background = "bg-[var(--secondary)]",
  rounded = "rounded-3xl",
  padding = "px-2",
  inputClass = "",                  // input additional classes
  iconColor = "text-primary",
  iconSize = 16,
  iconPosition = "right",           // left or right
  iconBg = "bg-transparent",        // optional icon background
  iconPadding = "p-0",              // optional icon padding
  iconRounded = "rounded-full",     // optional icon rounding
  ...props
}) => {
  return (
    <Container
      className={clsx(
        "flex items-center justify-between py-1 gap-2 w-full  ",
        background,
        rounded,
        padding,
        className
      )}
    >
      {iconPosition === "left" && (
        <div>
        <IconContainer
         name={icon}
         size={iconSize}
         color={iconColor}
         background={iconBg}
         padding={iconPadding}
         rounded={iconRounded}
       />
       </div>
      )}
      <div>
      <Input
        placeholder={placeholder}
        className={clsx(
          "bg-transparent outline-none text-sm text-[var(--text-primary)] w-full",
          inputClass
        )}
        {...props}
      />

      </div>
     

      {iconPosition === "right" && (
        <div>
         <IconContainer
          name={icon}
          size={iconSize}
          color={iconColor}
          background={iconBg}
          padding={iconPadding}
          rounded={iconRounded}
        />
        </div>
      )}
    </Container>
  );
};

export default SearchBar;
