import React from "react";

const BookItem = ({
  _id,
  img,
  name,
  author,
  editorial,
  price,
  type,
  item,
  onDelete,
  onEdit
}) => {
  return (
    <tr>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-900">
        <img src={img} className="w-24 h-36" alt={img} />
      </td>
      <td className="px-4 py-2 font-lg text-gray-900">
          <h3 className="font-bold">{name}</h3>
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
            onClick={ () => onEdit(item)}
            href="#"
            className="inline-block rounded-sm bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700"
          >
            Editar
          </button>
          <button
            onClick={()=>onDelete(_id)}
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
