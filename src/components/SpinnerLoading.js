import React from "react";

const SpinnerLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col gap-6 bg-gray-100 opacity-75 z-50 ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <div className="text-2xl ml-10">
        <p> Redirecting to Home page......</p>
      </div>
    </div>
  );
};

export default SpinnerLoading;
