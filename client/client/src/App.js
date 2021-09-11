import "./App.css";
import SideBar from "./components/sideBar/sideBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Signin from "./screens/signin";
import Content from "./components/topBar/content";
import store from "./redux/store";
function App() {
  const [adminInfor, setAdminInfor] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isReload, setReload] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const infor = localStorage.getItem("adminInfor");
  const reload = ()=>{
    setReload(!isReload);
  }
  useEffect(() => {
    setAdminInfor(infor);
  }, [adminInfor, infor]);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* <Route exact path="/signin" component={Signin}></Route> */}
    
          {adminInfor ? (
            <>
              <SideBar isOpen={isOpen}></SideBar>
              <Content toggleSidebar={toggleSidebar}></Content>
            </>
          ) : (
            <Signin  reload={ reload}></Signin>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
