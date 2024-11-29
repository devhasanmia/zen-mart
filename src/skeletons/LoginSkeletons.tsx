import React from "react";

const LoginSkeletons = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-5 animate-pulse">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="p-2 bg-gray-200 w-10 flex items-center justify-center text-white rounded-lg mx-auto"></div>
        <div className="text-3xl font-bold text-center my-4 w-20 h-6 bg-gray-200 rounded mx-auto"></div>
        <div className="space-y-4">
          <div>
            <div className="block text-sm font-medium text-gray-700 h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="mt-1 block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-10 bg-gray-200 rounded"></div>
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="p-2 w-full bg-gray-200 font-semibold text-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginSkeletons;
