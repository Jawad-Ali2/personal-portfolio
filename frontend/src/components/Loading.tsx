import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="bg-black/50 absolute h-screen w-full   z-50">
      <div className="flex justify-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
