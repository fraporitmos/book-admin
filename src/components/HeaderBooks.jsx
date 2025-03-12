import React from "react";
import FilterBooks from "./FilterBooks";

const HeaderBooks = ({ onCreateBook, filter, setFilter, search, setSearch }) => {
  return (
    <div className="flex p-6 flex-row items-center justify-between w-full bg-gray-800 shadow-xs">
      <button
        onClick={onCreateBook}
        type="button"
        class="py-2 px-4 w-44  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Agregar libro
      </button>

      <span className="flex w-full h-10 text-sm border bg-gray-100 border-gray-300 rounded-full cursor-pointer md:w-1/3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none"
        />
      </span>
      <div className="flex flex-row-reverse ml-4 mr-4 text-white md:hidden">
        <button>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center  mr-8 md:flex">
        <FilterBooks setFilter={setFilter} filter={filter} />
      </div>
    </div>
  );
};

export default HeaderBooks;
