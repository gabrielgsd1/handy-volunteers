import React, { FC, useState } from "react";

interface TabComponentProps {
  tabs: {
    name: string;
    component: JSX.Element;
  }[];
}

function TabComponent({ tabs }: TabComponentProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full">
      <div className="buttons flex">
        {tabs.map((tab, i) => (
          <button
            onClick={() => setCurrentTab(i)}
            className={`flex-1 duration-150 py-4 first:rounded-l-lg last:rounded-r-lg ${
              currentTab === i
                ? "bg-custom-green text-custom-black"
                : "bg-custom-green/10 text-custom-green hover:bg-custom-green/25"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {tabs[currentTab].component}
    </div>
  );
}

export default TabComponent;
