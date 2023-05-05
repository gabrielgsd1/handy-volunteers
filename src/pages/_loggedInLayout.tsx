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
        <header className="[grid_area:_header] py-4 px-2">
          CABEÇALHO TEMPORÁRIO
        </header>
        <Sidebar />
        <main className="[grid-area:_main]">{children}</main>
      </div>
    </AuthLayer>
  );
}

export default LoggedLayout;
