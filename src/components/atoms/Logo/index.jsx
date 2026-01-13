import React from "react";
import ImageComponent from "../ImageComponent";

const Logo = ({
  leftImage,
  rightImage,
  separator = "|",
  gap = 15,      // space between images and separator
  maxHeight = 48 // max height for logos
}) => {
  return (
    <div
      className="flex items-center"
      style={{ gap: `${gap}px` }}
    >
      <ImageComponent src={leftImage} alt="Left Logo" maxHeight={maxHeight} />
      <span className="font-bold text-lg" style={{ lineHeight: `${maxHeight}px` }}>
        {separator}
      </span>
      <ImageComponent src={rightImage} alt="Right Logo" maxHeight={maxHeight} />
    </div>
  );
};

export default Logo;
