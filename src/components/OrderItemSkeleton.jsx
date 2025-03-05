// OrderItemSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";

const OrderItemSkeleton = () => {
  return (
    <tr>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-900">
        <Skeleton width={200} />
      </td>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-700">
        <Skeleton width={150} />
      </td>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-700">
        <Skeleton width={200} />
      </td>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-700">
        <Skeleton width={150} />
      </td>
      <td className="px-4 py-2 font-lg whitespace-nowrap text-gray-700">
        <Skeleton width={60} />
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <Skeleton width={60} />
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <Skeleton width={100} />
      </td>
    </tr>
  );
};

export default OrderItemSkeleton;
