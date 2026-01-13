// import React from "react";
// import clsx from "clsx";

// const VARIANTS = {
//   primary: `
//     bg-[var(--primary-button)]
//     text-[var(--primary)]
//     rounded-4xl
//     hover:bg-[#0857ded4]
//   `,
//   secondary: `
//     bg-[var(--secondary)]
//     text-black
//     rounded-4xl
//     hover:bg-[var(--secondary-hover)]
//   `,
//   accent: `
//     bg-[var(--accent)]
//     text-black
//     rounded-4xl
//     hover:bg-[var(--accent-hover)]
//   `,
//   error: `
//     bg-[var(--error-background)]
//     text-[var(--error)]
//     border border-[var(--error-border)]
//     rounded-2xl
//     hover:bg-[var(--error-hover)]
//   `,
//   outline: `
//     bg-transparent
//     rounded-4xl
//     border border-[var(--background)]
//     text-[var(--text-secondary)]
//     hover:bg-[var(--secondary)]
//     hover:text-[var(--text-primary)]
//   `,
//   view: `
//     bg-transparent
//     rounded-4xl
//     border border-[var(--view)]
//     text-[var(--text-primary)]
//     hover:bg-[var(--view-hover)]
//   `,
//   disabled: `
//     bg-gray-400
//     text-black
//     opacity-80
//     rounded-4xl
//     cursor-not-allowed
//   `,
// };

// const SIZES = {
//   sm: "h-9 px-3 text-xs",
//   md: "h-11 px-4 text-sm",
//   lg: "h-13 px-6 text-base",
// };

// const Buttons = ({
//   title = "Submit",
//   handler,
//   loading = false,
//   loadingtext = "",
//   disabled = false,
//   type = "button",
//   className = "",
//   variant = "primary",
//   size = "md",
//   icon: Icon,
//   iconPosition = "left",
//   iconSize = 18,
// }) => {
//   const isDisabled = disabled || variant === "disabled";

//   const variantClasses = isDisabled
//     ? VARIANTS.disabled
//     : VARIANTS[variant] || VARIANTS.primary;

//   const sizeClasses = SIZES[size] || SIZES.md;

//   return (
//     <button
//       type={type}
//       disabled={isDisabled}
//       onClick={!isDisabled ? handler : undefined}
//       className={clsx(
//         `
//         relative group
//         font-medium cursor-pointer
//         flex items-center justify-center gap-2
//         duration-200 ease-out
//         focus-visible:outline-none
//         focus-visible:ring-2
//         focus-visible:ring-[var(--secondary)]
//         focus-visible:ring-offset-2
//       `,
//         sizeClasses,
//         variantClasses,

//         // 🔥 className goes LAST so width/height overrides everything
//         className
//       )}
//     >
//       {!isDisabled && (
//         <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent" />
//       )}

//       {Icon && iconPosition === "left" && (
//         <Icon
//           size={iconSize}
//           className="relative z-10 "
//         />
//       )}

//       {title && (
//         <span className="relative z-10 select-none truncate">
//           {loading ? loadingtext : title}
//         </span>
//       )}

//       {Icon && iconPosition === "right" && (
//         <Icon
//           size={iconSize}
//           className="relative z-10 "
//         />
//       )}
//     </button>
//   );
// };

// export default Buttons;



// import React from "react";
// import clsx from "clsx";

// const VARIANTS = {
//   primary: `bg-[var(--primary-button)] text-[var(--primary)]  hover:bg-[#0857ded4]`,
//   secondary: `bg-[var(--secondary)] text-black rounded-4xl hover:bg-[var(--secondary-hover)]`,
//   accent: `bg-[var(--accent)] text-black rounded-4xl hover:bg-[var(--accent-hover)]`,
//   error: `bg-[var(--error-background)] text-[var(--error)] border border-[var(--error-border)] rounded-2xl hover:bg-[var(--error-hover)]`,
//   outline: `bg-transparent rounded-4xl border border-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--secondary)] hover:text-[var(--text-primary)]`,
//   view: `bg-transparent rounded-4xl border border-[var(--view)] text-[var(--text-primary)] hover:bg-[var(--view-hover)]`,
//   disabled: `bg-gray-400 text-black opacity-80 rounded-4xl cursor-not-allowed`,
// };

// const SIZES = {
//   sm: "h-9 px-3 text-xs",
//   md: "h-11 px-4 text-sm",
//   lg: "h-13 px-6 text-base",
// };

// const Buttons = ({
//   title = "Submit",
//   handler,
//   loading = false,
//   loadingtext = "",
//   disabled = false,
//   type = "button",
//   className = "",
//   textClassName = "",
//   variant = "primary",
//   size = "md",

//   // ICON SUPPORT
//   icon: Icon,
//   iconPosition = "left",
//   iconSize = 18,
//   iconClassName="",

//   // IMAGE SUPPORT
//   image,
//   imageAlt = "button image",
//   imageWidth = 18,
//   imageHeight = 18,
//   imagePosition = "left",   // ✅ FIXED: now defined
// }) => {
//   const isDisabled = disabled || variant === "disabled";

//   const variantClasses = isDisabled ? VARIANTS.disabled : VARIANTS[variant];
//   const sizeClasses = SIZES[size];

//   return (
//     <button
//       type={type}
//       disabled={isDisabled}
//       onClick={!isDisabled ? handler : undefined}
//       className={clsx(
//         `
//         relative group font-medium cursor-pointer
//         flex items-center justify-center gap-2
//         duration-200 ease-out
//         focus-visible:outline-none
//         focus-visible:ring-2
//         focus-visible:ring-[var(--secondary)]
//         focus-visible:ring-offset-2
//         `,
//         sizeClasses,
//         variantClasses,
//         className
//       )}
//     >
//       {!isDisabled && (
//         <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent" />
//       )}

//       {/* LEFT IMAGE */}
//       {image && imagePosition === "left" && (
//         <img
//           src={image}
//           alt={imageAlt}
//           className="relative z-10 object-contain"
//           style={{ width: imageWidth, height: imageHeight }}
//         />
//       )}

//       {/* LEFT ICON */}
//       {Icon && iconPosition === "left" && (
//         <Icon size={iconSize} className={clsx(
//           "relative z-10  ",
//           iconClassName
//         )} />
//       )}

//       {/* TEXT */}
//      {/* TEXT */}
//      {title && (
//         <span
//           className={clsx(
//             "relative z-10 select-none   select-none whitespace-normal text-left leading-tight",
//             textClassName
//           )}
//         >
//           {loading ? loadingtext : title}
//         </span>
//       )}


//       {/* RIGHT IMAGE */}
//       {image && imagePosition === "right" && (
//         <img
//           src={image}
//           alt={imageAlt}
//           className="relative z-10 object-contain"
//           style={{ width: imageWidth, height: imageHeight }}
//         />
//       )}

//       {/* RIGHT ICON */}
//       {Icon && iconPosition === "right" && (
//         <Icon size={iconSize} className="relative z-10" />
//       )}
//     </button>
//   );
// };

// export default Buttons;



import React from "react";
import clsx from "clsx";

const VARIANTS = {
  primary: `bg-[var(--primary-button)] text-[var(--primary)] hover:bg-[#0857ded4]`,
  secondary: `bg-[var(--secondary)] text-black rounded-4xl hover:bg-[var(--secondary-hover)]`,
  accent: `bg-[var(--accent)] text-black rounded-4xl hover:bg-[var(--accent-hover)]`,
  error: `bg-[var(--error-background)] text-[var(--error)] border border-[var(--error-border)] rounded-2xl hover:bg-[var(--error-hover)]`,
  outline: `bg-transparent rounded-4xl border border-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--secondary)] hover:text-[var(--text-primary)]`,
  view: `bg-transparent rounded-4xl border border-[var(--view)] text-[var(--text-primary)] hover:bg-[var(--view-hover)]`,
  disabled: `bg-gray-400 text-black opacity-80 rounded-4xl cursor-not-allowed`,

  // -------------------------------------
  // ✅ NEW ACCORDION VARIANT (Exact same design as your original)
  // -------------------------------------
  accordion: `
  bg-[var(--secondary)] cursor-pointer h-11
  absolute 
  -bottom-6 -right-[1px]
  text-[10px] px-3 py-[4px]
  flex items-center gap-1
  `,
};

const SIZES = {
  xs: "h-5 px-2 text-xs",
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-4 text-sm",
  lg: "h-13 px-6 text-base",
};

const Buttons = ({
  title = "Submit",
  handler,
  loading = false,
  loadingtext = "",
  disabled = false,
  type = "button",
  className = "",
  textClassName = "",
  variant = "primary",
  size = "md",

  // Accordion-specific
  showMore = false,
  onToggle,

  // ICON SUPPORT
  icon: Icon,
  iconPosition = "left",
  iconSize = 18,
  iconClassName = "",

  // IMAGE SUPPORT
  image,
  imageAlt = "button image",
  imageWidth = 18,
  imageHeight = 18,
  imagePosition = "left",
}) => {
  const isDisabled = disabled || variant === "disabled";

  const baseVariantClasses = isDisabled
    ? VARIANTS.disabled
    : VARIANTS[variant];

  // -------------------------------------
  // APPLY ACCORDION DYNAMIC STATE
  // -------------------------------------
  const accordionStateClasses =
    variant === "accordion"
      ? showMore
        ? `
        bg-white -bottom-5
        border-[var(--background)]
        rounded-tr-none rounded-bl-2xl rounded-tl-none rounded-br-2xl 
        border border-t-0
        `
        : `
        bg-[var(--secondary)]
        border-l-[1px] border-[var(--secondary)]
        rounded-tr-none rounded-bl-2xl rounded-tl-none rounded-br-3xl

        before:absolute before:-top-0 before:-left-4
        before:w-4 before:h-4
        before:bg-[var(--secondary)]
        before:border before:border-[var(--background)]
        before:rounded-2xl before:content-['']
        before:rounded-tl-none before:rounded-bl-none before:rounded-br-none 
        before:border-b-0 before:border-l-0 before:border-r-0
        before:rotate-180

        after:absolute after:-top-0 after:-left-[24px]
        after:w-6 after:h-6
        after:bg-white
        after:rounded-2xl after:content-['']
        after:rounded-tr-none after:rounded-br-none after:rounded-tl-none
        after:border-b-0 after:border-l-0 after:border-r-0
        after:rotate-180
        `
      : "";

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={!isDisabled ? (onToggle || handler) : undefined}
      className={clsx(
        `
        relative group font-medium cursor-pointer
        flex items-center justify-center gap-2
        duration-200 ease-out
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--secondary)]
        focus-visible:ring-offset-2
        `,
        size === "accordion" ? "" : SIZES[size],
        baseVariantClasses,
        accordionStateClasses,
        className
      )}
    >
      {!isDisabled && variant !== "accordion" && (
        <span className="pointer-events-none absolute inset-0 rounded-xl " />
      )}

      {/* LEFT IMAGE */}
      {image && imagePosition === "left" && (
        <img
          src={image}
          alt={imageAlt}
          className="relative z-10 object-contain"
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}

      {/* LEFT ICON */}
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} className={clsx("relative z-10", iconClassName)} />
      )}

      {/* TEXT */}
      {title && (
        <span
          className={clsx(
            "relative z-10 select-none whitespace-normal text-left leading-tight",
            textClassName
          )}
        >
          {loading ? loadingtext : title}
        </span>
      )}

      {/* RIGHT IMAGE */}
      {image && imagePosition === "right" && (
        <img
          src={image}
          alt={imageAlt}
          className="relative z-10 object-contain"
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}

      {/* RIGHT ICON */}
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} className="relative z-10" />
      )}
    </button>
  );
};

export default Buttons;
