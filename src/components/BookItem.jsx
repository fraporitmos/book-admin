import React from "react";

const BookItem = ({
  img,
  name,
  author,
  editorial,
  description,
  price,
  type,
}) => {
  return (
    <tr>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-900">
        <img src={img} className="w-24 h-36" alt={img} />
      </td>
      <td className="px-4 py-2 font-lg text-gray-900">
        <div className="w-96">
          <h3 className="font-bold">{name}</h3>
          <p className=" text-sm text-gray-500 whitespace-normal line-clamp-3">{description}</p>
        </div>
      </td>

      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {author}
      </td>
      <td className="px-4 py-2  font-lg  whitespace-nowrap text-gray-700">
        {editorial}
      </td>

      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {price}
      </td>
      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {type}
      </td>

      <td className="px-4 py-2 whitespace-nowrap">
        <div className="flex   gap-2  items-center justify-center ">
          <button
            href="#"
            className="inline-block rounded-sm bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700"
          >
            Editar
          </button>
          <button
            href="#"
            className="inline-block rounded-sm bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookItem;
