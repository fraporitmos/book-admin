import React, { useState } from "react";
import Libro from "../assets/libro.png";
import { IoHomeSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  return (
    <div class="flex h-screen w-64 flex-col justify-between  border-e bg-gray-800">
      <div class="px-4 py-6">
        <div class="flex justify-center w-full items-center">
          <img
            src={Libro}
            class=" h-18 w-18 object-cover  rounded-full bg-gray-900 text-gray-600 "
          />
        </div>

        <ul class="mt-6 space-y-1">
          <li>
            <Link
              onClick={() => {
                setActive(0);
              }}
              to={"/home"}
            >
              <div
                href="#"
                class={`flex items-center rounded-lg duration-300 ease-in-out  cursor-pointer px-4 py-2   ${
                  active === 0 && "bg-blue-200"
                } `}
              >
                <IoHomeSharp
                  className={`${active === 0 ? "text-gray-800" : "text-white"}`}
                />
                <span
                  className={`text-sm font-medium ml-2 ${
                    active === 0 ? "text-gray-800" : "text-white"
                  } `}
                >
                  Home
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                setActive(1);
              }}
              to={"/books"}
            >
              <div
                href="#"
                class={`flex items-center  rounded-lg  duration-500 ease-in-out  cursor-pointer px-4 py-2 ${
                  active === 1 && "bg-blue-200"
                } `}
              >
                <MdLibraryBooks
                  className={`${active === 1 ? "text-gray-800" : "text-white"}`}
                />
                <span
                  className={`text-sm font-medium ml-2 ${
                    active === 1 ? "text-gray-800" : "text-white"
                  } `}
                >
                  Libros
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                setActive(2);
              }}
              to={"/orders"}
            >
              <div
                href="#"
                class={`flex items-center  rounded-lg  duration-500 ease-in-out  cursor-pointer px-4 py-2 ${
                  active === 2 && "bg-blue-200"
                } `}
              >
                <MdPayments
                  className={`${active === 2 ? "text-gray-800" : "text-white"}`}
                />
                <span
                  className={`text-sm font-medium ml-2 ${
                    active === 2 ? "text-gray-800" : "text-white"
                  } `}
                >
                  Compras
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                setActive(3);
              }}
              to={"/charts"}
            >
              <div
                href="#"
                class={`flex items-center  rounded-lg  duration-500 ease-in-out  cursor-pointer px-4 py-2 ${
                  active === 3 && "bg-blue-200"
                } `}
              >
                <FaChartPie
                  className={`${active === 3 ? "text-gray-800" : "text-white"}`}
                />
                <span
                  className={`text-sm font-medium ml-2 ${
                    active === 3 ? "text-gray-800" : "text-white"
                  } `}
                >
                  Estadisticas
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-600">
        <a href="#" class="flex items-center gap-2 p-4 ">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="size-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs text-white">
              <strong class="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
