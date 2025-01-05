import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen noise-bg bg-[#161E31] text-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 text-center"></div>
        <p className="mt-4 text-lg font-semibold">Loading... Please wait!</p>
        <p className="mt-2 text-sm text-gray-500">Good things take time 😄</p>
      </div>
    </div>
  );
};

export default Loading;
