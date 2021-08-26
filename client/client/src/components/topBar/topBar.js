import React,{useState} from 'react';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand,NavbarText, Nav, NavItem, DropdownItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu } from 'reactstrap';
const TopBar = (Props) => {
    const {toggleSidebar} = Props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="topbar">
          <Navbar color="light" className="topbar-nav" light expand="md">
            <NavbarBrand > <Button color="info" onClick={toggleSidebar}>  <FontAwesomeIcon icon={faAlignLeft} /></Button></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse   isOpen={isOpen} navbar>
              <Nav  className="mr-auto" navbar>
                <NavItem >
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  
                 
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    
  
  export default  TopBar;