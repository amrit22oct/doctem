import React from "react";
import Dropdown from "../Dropdown";
import IconContainer from "../IconContainer";

const Pagination = ({
  page = 1,
  pageSize = 20,
  total = 150,
  onPageChange,
  onPageSizeChange
}) => {
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  const totalPages = Math.ceil(total / pageSize);

  const pageSizeOptions = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "50", value: 50 }
  ];

  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2 bg-white">

      {/* Page Size Dropdown */}
      <div className="w-20">
        <Dropdown
          options={pageSizeOptions}
          value={pageSize}
          onChange={(val) => onPageSizeChange(val)}
         className="border border-[var(--view)]"
        />
      </div>

      {/* Count Text */}
      <span className="text-md  text-[var(--text-primary)] whitespace-nowrap">
        <span className="font-semibold">{start}-{end}</span> of {total}
      </span>

      {/* Prev Button */}
     <div className="flex ">
     <IconContainer
        name="HiChevronLeft"
        size={24}
        className="w-5 h-5"
        background="bg-white"
        onClick={() => page > 1 && onPageChange(page - 1)}
        style={{ opacity: page === 1 ? 0.4 : 1 }}
      />

      {/* Next Button */}
      <IconContainer
        name="HiChevronRight"
        size={24}
        className="w-5 h-5"
        background="bg-white"
        onClick={() => page < totalPages && onPageChange(page + 1)}
        style={{ opacity: page === totalPages ? 0.4 : 1 }}
      />
     </div>

    </div>
  );
};

export default Pagination;
