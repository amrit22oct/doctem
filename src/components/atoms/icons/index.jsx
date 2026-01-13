// import React from "react";

// // Import full icon packs (auto-detects based on prefix)
// import * as Fi from "react-icons/fi";
// import * as Md from "react-icons/md";
// import * as Hi from "react-icons/hi";
// import * as Hi2 from "react-icons/hi2";
// import * as Fa from "react-icons/fa";
// import * as Fa6 from "react-icons/fa6";
// import * as Io from "react-icons/io5";
// import * as Bs from "react-icons/bs";
// import * as Ri from "react-icons/ri";
// import * as Tb from "react-icons/tb";
// import * as Lu from "react-icons/lu";

// const ICON_MAP = {
//   Fi,
//   Md,
//   Hi,
//   Hi2,
//   Fa,
//   Fa6,
//   Io,
//   Bs,
//   Ri,
//   Tb,
//   Lu,
// };

// const Icons = ({ name, size = 20, className = "" }) => {
//   if (!name) return null;

//   // Detect icon pack prefix (FiEye → Fi / MdHome → Md)
//   const prefix = name.slice(0, 2); 

//   const library = ICON_MAP[prefix];

//   if (!library) {
//     console.warn(`⚠️ Unknown icon prefix "${prefix}" for icon "${name}"`);
//     return null;
//   }

//   const IconComponent = library[name];

//   if (!IconComponent) {
//     console.warn(`⚠️ Icon "${name}" not found in "${prefix}" library`);
//     return null;
//   }

//   return <IconComponent size={size} className={className} />;
// };

// export default Icons;


import React from "react";
import * as Fi from "react-icons/fi";
import * as Md from "react-icons/md";
import * as Hi from "react-icons/hi";
import * as Hi2 from "react-icons/hi2";
import * as Fa from "react-icons/fa";
import * as Fa6 from "react-icons/fa6";
import * as Io from "react-icons/io5";
import * as Bs from "react-icons/bs";
import * as Ri from "react-icons/ri";
import * as Tb from "react-icons/tb";
import * as Lu from "react-icons/lu";

const ICON_MAP = { Fi, Md, Hi, Hi2, Fa, Fa6, Io, Bs, Ri, Tb, Lu };

const Icons = ({ name, size = 20, className = "", image, imageAlt = "icon image" }) => {
  if (image) {
    return <img src={image} alt={imageAlt} className={`h-[${size}px] w-[${size}px] object-contain ${className}`} />;
  }

  if (!name) return null;

  const prefix = name.slice(0, 2);
  const library = ICON_MAP[prefix];

  if (!library) {
    console.warn(`⚠️ Unknown icon prefix "${prefix}" for icon "${name}"`);
    return null;
  }

  const IconComponent = library[name];
  if (!IconComponent) {
    console.warn(`⚠️ Icon "${name}" not found in "${prefix}" library`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icons;

