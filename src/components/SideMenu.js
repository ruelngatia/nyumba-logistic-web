import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {

  const naviagate = useNavigate();

  const items1 = [
    {
      key: "",
      label: "Dashboard",
    },
    {
      key: "property",
      label: "Property",
    },
    {
      key: "tenants",
      label: "Tenants",
    },
    {
      key: "fainances",
      label: "Fainances",
    },
    {
      key: "maintainance",
      label: "Maintainance",
    },
    {
      key: "invoices",
      label: "Invoinces",
    },
    {
      key: "reports",
      label: "Reports",
    },
    {
      key: "communications",
      label: "Communications",
    },
    {
      key: "analysis",
      label: "Analysis",
    },
    {
      key: "settings",
      label: "Settings",
    },
  ];
  return (
    <div className="absolute h-screen md:hidden  z-40">
      <Menu
        className="text-left bg-sider-blue space-y-0.5 pb-2 h-full "
        mode="inline"
        defaultSelectedKeys={["3"]}
        items={items1}
        onClick={(info) => naviagate('/'+info.key)}
      />
    </div>
  );
}
