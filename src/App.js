import { Avatar, Badge, Dropdown, Layout, Space } from "antd";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
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
import MultiPageModal from "./components/MultiPageModal";
import AddTenantDetailsForm from "./forms/AddTenantDetailsForm";
import AddTenantContactInfo from "./forms/AddTenantContactInfo";
import CustomModal from "./components/CustomModal";
import ExpectedEarnings from "./layouts/ExpectedEarnings";
import ImagesForm from "./forms/ImagesForm";
import Notifications from "./pages/Notifications";
import { CloseFullscreen, Fullscreen, Logout, NotificationsActive } from "@mui/icons-material";

function App() {
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(false);
  const [isAddTenant, setIsAddTenant] = useState(false);
  const [isExpectedEarnings, setIsExpectedEarnings] = useState(false);
  const [isFullScreen,setIsFullScreen] = useState(false);


  const screen = useMediaQuery('(min-width:768px)');
  const navigator = useNavigate()

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

  document.addEventListener("fullscreenchange",(event)=>{
    if(document.fullscreenElement){
      setIsFullScreen(true);
    }else{
      setIsFullScreen(false); 
    }
  })

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if(isFullScreen){
      document.exitFullscreen()
    }else{
      document.body.requestFullscreen()
    }
  }

  const itemsLogout = [
    {
      label: "Logout",
      key: "1",
      icon: <Logout/>
    },
    {
      label: "notification",
      key: "2",
      onClick: (()=> navigator("/notifications")),
      icon: <NotificationsActive/>
    },
    {
      label: isFullScreen ? "Exit Full screen" : "Full Screen",
      key: "3",
      icon: isFullScreen ?  <CloseFullscreen/> : <Fullscreen/> ,
      onClick: handleFullScreen,
      disabled: !screen
    }
  ];

  let location = useLocation();

  useEffect(()=>{
    if((location.search === '?modal=addTenant' && (location.pathname === '/' || location.pathname === '/tenants'))){
       setIsAddTenant(true)
    }else if(location.search === '?modal=expectedEarnings' && location.pathname === '/'){
      setIsExpectedEarnings(true)
    }

  },[location])

  return (
    <div className="App h-full ">
      <Layout className="h-full">
        <Header
          className="h-16 px-3 flex flex-row justify-between bg-primary-color text-white relative"
          style={{
            alignItems: "center"
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
            <Dropdown menu={{items: itemsLogout}}>
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
                <Route path="/notifications" element={<Notifications/>} />
              </Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <MultiPageModal title="Add Tenant" open={isAddTenant} setIsOpen={setIsAddTenant} childred={[<AddTenantDetailsForm/>, <ImagesForm/>,<AddTenantContactInfo/>]}/>
      <CustomModal width={700} title={"Expected Earnings"} open={isExpectedEarnings} setClose={setIsExpectedEarnings} children={<ExpectedEarnings/>}/>
    </div>
  );
}

export default App;
