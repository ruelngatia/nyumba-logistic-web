import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideMenu({setIsSideMenuHidden}) {

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
      key: "finances",
      label: "Finances",
    },
    {
      key: "maintenance",
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
    <div className="absolute h-screen w-2/3 md:w-[14rem] z-40 ">
      <Menu
        className="text-left bg-sider-blue space-y-0.5 pb-2 h-full "
        mode="inline"
        defaultSelectedKeys={["3"]}
        items={items1}
        onClick={(info) => {
          naviagate('/'+info.key);
          setIsSideMenuHidden(false)
      }}
      />
    </div>
  );
}
