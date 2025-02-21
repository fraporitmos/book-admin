import React from "react";

const HomeScreen = () => {
  return (
    <div className="flex justify-evenly mt-8 w-full">
      <div class="p-4 bg-white shadow-lg rounded-2xl  dark:bg-gray-800">
        <div class="flex items-center">
          <span class="relative w-4 h-4 p-2 bg-green-500 rounded-full"></span>
          <p class="ml-2 text-gray-700 text-md dark:text-gray-50">Sales</p>
        </div>
        <div class="flex flex-col justify-start">
          <p class="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
            S/ 1234
          </p>
          <div class="relative h-2 bg-gray-200 rounded w-28">
            <div class="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"></div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white shadow-lg rounded-2xl  dark:bg-gray-800">
        <div class="flex items-center">
          <span class="relative w-4 h-4 p-2 bg-indigo-500 rounded-full"></span>
          <p class="ml-2 text-gray-700 text-md dark:text-gray-50">Sales</p>
        </div>
        <div class="flex flex-col justify-start">
          <p class="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
            S/ 2494
          </p>
          <div class="relative h-2 bg-gray-200 rounded w-28">
            <div class="absolute top-0 left-0 w-2/3 h-2 bg-indigo-500 rounded"></div>
          </div>
        </div>
      </div>
      <div class="p-4 bg-white shadow-lg rounded-2xl  dark:bg-gray-800">
        <div class="flex items-center">
          <span class="relative w-4 h-4 p-2 bg-amber-500 rounded-full"></span>
          <p class="ml-2 text-gray-700 text-md dark:text-gray-50">Sales</p>
        </div>
        <div class="flex flex-col justify-start">
          <p class="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
            S/ 3450 
          </p>
          <div class="relative h-2 bg-gray-200 rounded w-28">
            <div class="absolute top-0 left-0 w-2/3 h-2 bg-amber-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
