import React from "react";
import { formatDate } from "../utils/Utils";

const OrderItem = ({
  payer,
  email,
  address,
  paymentDate,
  valuePayment,
  state,
  onAction,
  cart,
}) => {
  console.log(state)

  return (
    <tr>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-900">
        {payer}
      </td>
      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {email}
      </td>
      <td className="px-4 py-2  font-lg  whitespace-nowrap text-gray-700">
        {address}
      </td>
      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {formatDate(paymentDate)}
      </td>
      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {valuePayment}
      </td>
      <td
        className={`  whitespace-nowrap  
        ${
          state.toUpperCase() === "PENDING"
            ? "text-amber-300":
          state.toUpperCase() === "PAYMENT"
            ? "text-green-400"
            : "text-indigo-400"
        } `}
      >
        <p className="px-4  text-xs  font-bold  rounded-md  p-1 bg-gray-900  ">
        {state.toUpperCase()}

        </p>
      </td>

      <td className="px-4 py-2 whitespace-nowrap">
        <button
          onClick={() => onAction(cart)}
          href="#"
          className="inline-block rounded-sm bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700"
        >
          Ver carrito
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
