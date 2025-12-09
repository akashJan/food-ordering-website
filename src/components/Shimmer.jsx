import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      {Array(16)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 p-3 rounded-lg bg-gray-200 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]"
          >
            <div className="h-36 rounded-lg"></div>
            <div className="h-5 rounded bg-gray-300"></div>
            <div className="h-5 rounded bg-gray-300"></div>
            <div className="h-5 rounded bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
