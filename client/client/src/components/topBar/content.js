import React from "react";
import { Container } from "reactstrap";
import TopBar from "./topBar";
import Products from "../../screens/products";
import Users from "../../screens/users"
import { Switch, Route } from "react-router-dom";
function Content(Props) {
  const { toggleSidebar } = Props;
  return (
    <div className="content">
      <TopBar toggleSidebar={toggleSidebar}></TopBar>
    
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/user" component={Users}></Route>
        </Switch>
  
    </div>
  );
}

export default Content;
