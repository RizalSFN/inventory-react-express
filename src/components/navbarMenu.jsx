import React from "react";

export default function NavbarMenu() {
  return (
    <div className="border border-black bg-gray-800 px-5 py-3">
      <div className="flex justify-between text-white">
        <h1>icon-menu</h1>
        <div className="flex justify-between border border-white w-4/12">
          <h1>icon-user</h1>
          <h1>icon-logout</h1>
        </div>
      </div>
    </div>
  );
}
