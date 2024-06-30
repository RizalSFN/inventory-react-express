import React from "react";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div className="w-72 border border-black h-screen bg-gray-800 px-5">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-white">MyApp</h1>
      </div>
      <div className="flex flex-col mt-10">
        <a
          href="#"
          className="hover:bg-gray-600 text-gray-500 hover:text-white px-3 py-2 duration-300 rounded-md font-medium tracking-wide"
        >
          <i className="bi bi-house-fill mr-3"></i>Dashboard
        </a>
        <a
          href="#"
          className="hover:bg-gray-600 text-gray-500 hover:text-white px-3 py-2 mt-4 duration-300 rounded-md font-medium tracking-wide"
        >
          <i className="bi bi-boxes mr-3"></i>Product
        </a>
      </div>
    </div>
  );
}
