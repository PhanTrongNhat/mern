import "./App.css";
import SideBar from "./components/sideBar/sideBar";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";

import Content from "./components/topBar/content";
import Home from "./screens/products";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Router>
        <SideBar isOpen={isOpen}></SideBar>
        <Content toggleSidebar={toggleSidebar}></Content>
      </Router>
    </div>
  );
}

export default App;
