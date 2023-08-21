import { Menu } from "antd";
import React from "react";

export default function SideMenu() {
  const items1 = [
    {
      key: "1",
      label: "Dashboard",
    },
    {
      key: "2",
      label: "Property",
    },
    {
      key: "3",
      label: "Tenants",
    },
    {
      key: "4",
      label: "Fainances",
    },
    {
      key: "5",
      label: "Maintainance",
    },
    {
      key: "6",
      label: "Invoinces",
    },
    {
      key: "7",
      label: "Reports",
    },
    {
      key: "8",
      label: "Invoinces",
    },
    {
      key: "9",
      label: "Communications",
    },
    {
      key: "10",
      label: "Analysis",
    },
    {
      key: "11",
      label: "Settings",
    },
  ];
  return (
    <div className="absolute h-screen md:hidden w-2/4">
      <Menu
        className="text-left text-xl bg-sider-blue space-y-3 pb-2 h-full "
        mode="inline"
        defaultSelectedKeys={["3"]}
        items={items1}
      />
    </div>
  );
}
