import React from "react";
import Breadcrumb from "../../atoms/BreadCrumb";
import HomeImg from "../../../assets/home.png";

const MainTemplate = ({ children, headerImage }) => {
  return (
    <main className="w-full min-h-screen bg-[var(--background)] p-4">

      {/* Auto Breadcrumb */}
      <div>
      <Breadcrumb homeIcon={HomeImg} />
      </div>

    

      <div className="w-full">{children}</div>
    </main>
  );
};

export default MainTemplate;
