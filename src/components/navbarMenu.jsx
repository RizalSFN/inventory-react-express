import React from "react";

export default function NavbarMenu() {
  return (
    <div className="border border-black bg-gray-800 px-5 py-3">
      <div className="flex justify-between text-white">
        <div className="flex items-center">
          <i className="bi bi-person-circle text-2xl mr-5"></i>
          <h1 className="font-medium text-white">Username</h1>
        </div>
        <button className="bg-red-600 px-3 rounded-md hover:bg-red-700">
          Logout <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
