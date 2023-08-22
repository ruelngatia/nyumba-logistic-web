import { Avatar, Badge, Dropdown, Layout, Menu, Space } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/SideMenu";
import { useMediaQuery } from "@mui/material";

function App() {
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(false);
  const screen = useMediaQuery('(min-width:768px)');

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

  const items = [
    {
      label: "Baraka hostel",
      key: "1",
    },
    {
      label: "Burj khalifa",
      key: "2",
    },
    {
      label: "Zod towers",
      key: "3",
    }
  ];

  const notifications = [
    {
      label: "New payment recieved",
      key: "1",
    },
    {
      label: "John doe vacated",
      key: "2",
    },
  ];

  return (
    <div className="App h-full ">
      <Layout className="h-full">
        <Header
          className="h-16 flex flex-row justify-between bg-primary-color text-white relative"
          style={{
            alignItems: "center",
            paddingInline: "1.6rem",
          }}
        >
          <button onClick={() => setIsSideMenuHidden(!isSideMenuHidden)}>
            <MenuIcon fontSize="large" />
          </button>
          <a href="#" className="hover:text-white">
            <h2 className="text-2xl font-bold hidden md:block">
              Nyumba logistic
            </h2>
          </a>
          <div className="flex flex-row gap-3 items-center">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Buildings
                  <KeyboardArrowDownIcon />
                </Space>
              </a>
            </Dropdown>
            <Dropdown menu={{items: notifications}}>
              <Badge count={2} className="">
                <Avatar>C</Avatar>
              </Badge>
            </Dropdown>
          </div>
        </Header>
        <Content className="">
          <Layout className="h-full ">
            {isSideMenuHidden?<SideMenu />:""}
            <Sider
              width={"18rem"}
              style={{ backgroundColor: "#E6FAFF" }}
              hidden={!screen}
              className=" border-b-grey border-r-2 h-screen "
            >
              <Menu
                className="text-left text-xl bg-sider-blue space-y-3"
                mode="inline"
                defaultSelectedKeys={["3"]}
                items={items1}
              />
            </Sider>
            <Content className="">
              <Routes>
                <Route path="/" element={<Dashboard/>} />
              </Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
