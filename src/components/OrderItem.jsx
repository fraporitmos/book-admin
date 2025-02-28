import React from "react";
import { formatDate } from "../utils/Utils";



const OrderItem = ({payer,email,address,paymentDate,valuePayment,state, onAction,cart}) => {
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
      <td className="px-4 py-2 font-lg  whitespace-nowrap text-gray-700">
        {state}
      </td>

      <td className="px-4 py-2 whitespace-nowrap">
        <button
          onClick={ () => onAction(cart)}
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
