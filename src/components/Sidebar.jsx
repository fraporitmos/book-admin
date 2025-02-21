import React from "react";
import Libro from "../assets/libro.png";
import { IoHomeSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="flex h-screen w-64 flex-col justify-between  border-e bg-white">
      <div class="px-4 py-6">
        <div class="flex justify-center w-full items-center">
          <img
            src={Libro}
            class=" h-18 w-18 object-cover  rounded-full bg-gray-900  text-gray-600 "
          />
        </div>

        <ul class="mt-6 space-y-1">
          <li>
            <Link to={"/home"}>
              <div
                href="#"
                class="flex items-center  rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-300"
              >
                <IoHomeSharp />
                <span className="text-sm font-medium text-gray-700 ml-2">
                  Home
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/books"}>
              <div
                href="#"
                class="flex items-center  rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-300"
              >
                <MdLibraryBooks />
                <span className="text-sm font-medium text-gray-700 ml-2">
                  Libros
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/books"}>
              <div
                href="#"
                class="flex items-center  rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-300"
              >
                <MdPayments />
                <span className="text-sm font-medium text-gray-700 ml-2">
                  Compras
                </span>
              </div>
            </Link>
          </li>

          <li>
            <div
              href="#"
              class="flex items-center  rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-300"
            >
              <FaChartPie />
              <span className="text-sm font-medium text-gray-700 ml-2">
                Estadisticas
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="size-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs">
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
