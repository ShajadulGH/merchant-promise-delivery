"use client";
import { Icon } from "@iconify/react";
const EmptyMessage = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="h-full flex justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <Icon icon="typcn:messages" className="text-7xl text-gray-600" />
          <div className="mt-4 text-lg font-semibold text-gray-600">
            No Messages!{" "}
          </div>
          <div className="mt-1 text-md font-semibold text-gray-600">
            Please Select an Issue to Chat
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyMessage;
