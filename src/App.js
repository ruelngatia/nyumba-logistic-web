import { Avatar, Badge, Dropdown, Layout, Space } from "antd";
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
import Property from "./pages/Property";
import Tenants from "./pages/Tenants";
import Finances from "./pages/Finances";
import Invoice from "./pages/Invoice";
import Communication from "./pages/Communication";
import Analysis from "./pages/Analysis";
import Settings from "./pages/Settings";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";

function App() {
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(false);
  const screen = useMediaQuery('(min-width:768px)');

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
            {isSideMenuHidden?<SideMenu setIsSideMenuHidden={setIsSideMenuHidden}/>:""}
            <Sider
              width={"14rem"}
              style={{ backgroundColor: "#E6FAFF" }}
              hidden={!screen}
              className=" h-screen "
            >
              {/* <Menu
                className="text-left  bg-sider-blue space-y-0.5"
                mode="inline"
                defaultSelectedKeys={["3"]}
                items={items1}
                onClick={(info)=>{
                  navigate('/'+info.key)
                  console.log(info);
                }}
              /> */}
              <SideMenu setIsSideMenuHidden={setIsSideMenuHidden}/>
            </Sider>
            <Content className="">
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/property" element={<Property/>} />
                <Route path="/tenants" element={<Tenants/>} />
                <Route path="/finances" element={<Finances/>} />
                <Route path="/maintenance" element={<Maintenance/>} />
                <Route path="/invoices" element={<Invoice/>} />
                <Route path="/communications" element={<Communication/>} />
                <Route path="/analysis" element={<Analysis/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/reports" element={<Reports/>} />
              </Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
