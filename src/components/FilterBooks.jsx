import React, { useState } from "react";

const FilterBooks = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      name="animals"
    >
      <option value="book">Libros</option>
      <option value="magazine">Revistas</option>
      <option value="comic">Commics</option>
    </select>
  );
};

export default FilterBooks;
