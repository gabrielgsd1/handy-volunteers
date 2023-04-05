import Sidebar from "@/components/Sidebar";
import React from "react";

interface LoggedLayoutProps {
  children: JSX.Element | string;
}

function LoggedLayout({ children }: LoggedLayoutProps) {
  return (
    <div className="home h-screen box-border">
      <header className="[grid_area:_header]">aaa</header>
      <Sidebar />
      <main className="[grid-area:_main]">{children}</main>
    </div>
  );
}

export default LoggedLayout;
