import { Layout, Menu } from "antd";
import "./App.css";
import { Routes } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function App() {
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(false);

  const items1 = [
    {
      key: "1",
      label: "Dashboard",
    },
    {
      key: "1",
      label: "Property",
    },
    {
      key: "1",
      label: "Tenants",
    },
    {
      key: "1",
      label: "Fainances",
    },
    {
      key: "1",
      label: "Maintainance",
    },
    {
      key: "1",
      label: "Invoinces",
    },
    {
      key: "1",
      label: "Reports",
    },
    {
      key: "1",
      label: "Invoinces",
    },
    {
      key: "1",
      label: "Communications",
    },
    {
      key: "1",
      label: "Analysis",
    },
    {
      key: "1",
      label: "Settings",
    },
  ];

  return (
    <div className="App">
      <Layout>
        <Header
          className="h-16 flex flex-row justify-between"
          style={{
            // display: "flex",
            // flexDirection: 'row',
            alignItems: "center",
            paddingInline: "1.6rem",
          }}
        >
          <button onClick={() => setIsSideMenuHidden(!isSideMenuHidden)}>
            <MenuIcon fontSize="large" />
          </button>
          <a href="#">
            <h2 className="text-2xl font-bold">Nyumba logistic</h2>
          </a>
          <div>some</div>
        </Header>
        <Content>
          <Layout>
            <Sider width={'20rem'} hidden={isSideMenuHidden} className=" border-r-4 ">
              <Menu
                className="text-left text-xl"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={items1}
              ></Menu>
            </Sider>
            <Content>
              <Routes>{/* Routes come here */}</Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
