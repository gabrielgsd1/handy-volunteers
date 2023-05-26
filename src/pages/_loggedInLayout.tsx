import AuthLayer from "@/components/AuthLayer";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

interface LoggedLayoutProps {
  children: JSX.Element | string;
}

function LoggedLayout({ children }: LoggedLayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <AuthLayer>
      <div className="home h-screen box-border lg:mt-0 mt-24">
        <header className="bg-custom-black [grid-area:_header] lg:hidden fixed px-6 top-0 py-8 left-0 right-0 w-full">
          <FiMenu
            size={40}
            className="inline-block cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </header>
        <Sidebar
          openSidebar={() => setShowSidebar(true)}
          isOpen={showSidebar}
          closeSidebar={() => setShowSidebar(false)}
        />
        <main className="[grid-area:_main] ml-0 lg:ml-[250px] pt-8">
          {children}
        </main>
      </div>
    </AuthLayer>
  );
}

export default LoggedLayout;
