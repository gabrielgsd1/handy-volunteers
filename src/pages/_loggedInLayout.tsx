import AuthLayer from "@/components/AuthLayer";
import Sidebar from "@/components/Sidebar";
import React from "react";

interface LoggedLayoutProps {
  children: JSX.Element | string;
}

function LoggedLayout({ children }: LoggedLayoutProps) {
  return (
    <AuthLayer>
      <div className="home h-screen box-border">
        <Sidebar />
        <main className="[grid-area:_main] ml-[250px] pt-8">{children}</main>
      </div>
    </AuthLayer>
  );
}

export default LoggedLayout;
