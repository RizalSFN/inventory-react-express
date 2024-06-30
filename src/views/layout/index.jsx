import React from "react";
import SidebarMenu from "../../components/sidebarMenu";
import NavbarMenu from "../../components/navbarMenu";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SidebarMenu />
      <div className="flex flex-col w-full">
        <NavbarMenu />
        {children}
      </div>
    </div>
  );
}
