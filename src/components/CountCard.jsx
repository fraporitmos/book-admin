import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";

const CountCard = ({ title, data, type }) => {
  return (
    <article className="flex items-center gap-4 rounded-lg border-2 border-gray-200 bg-white p-6 sm:justify-between">
      <span className="rounded-full bg-blue-100 p-3 text-blue-600 ">
        {type === "cart" ? (
          <FaShoppingCart size={24} className="text-blue-600" />
        ) : type === "money" ? (
          <SiCashapp size={24} className="text-blue-600" />
        ) : type === "eye" ? (
          <FaEye size={24} className="text-blue-600" />
        ) : (
          <BsPersonSquare size={24} className="text-blue-600" />
        )}
      </span>

      <div>
        <p className="text-2xl font-medium text-gray-900">{data}</p>

        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </article>
  );
};

export default CountCard;
