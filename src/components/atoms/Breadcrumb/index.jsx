import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = ({ homeIcon }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-2 text-[var(--text-primary)] mb-2 pl-2">
      {/* Home Icon */}
      <Link to="/" className="flex items-center gap-1">
        <img src={homeIcon} alt="home" className="w-5 h-5 object-contain" />
      </Link>

      {/* Auto Path Breadcrumb */}
      {pathParts.map((part, index) => {
        const url = "/" + pathParts.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={index}>
            <span className="text-gray-500"> {">"} </span>

            <Link to={url} className="text-sm font-medium capitalize">
              {part.replace(/-/g, " ")}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
