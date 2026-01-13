import React from "react";

const ImageComponent = ({ src, alt, maxHeight = 48, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      style={{ maxHeight: `${maxHeight}px` }}
    />
  );
};

export default ImageComponent;
