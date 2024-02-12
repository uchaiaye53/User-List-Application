import React from "react";

const NoData = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        <p className="text-xl text-gray-600 mt-4">No Data found</p>
      </div>
    </div>
  );
};

export default NoData;
