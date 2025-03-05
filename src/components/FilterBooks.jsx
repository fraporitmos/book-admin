import React from 'react'

const FilterBooks = () => {
  return (
 
<select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    <option value="books">
        Libros
    </option>

    <option value="magazines">
        Revistas
    </option>
    <option value="commics">
        Commics
    </option>
   
</select>

  )
}

export default FilterBooks