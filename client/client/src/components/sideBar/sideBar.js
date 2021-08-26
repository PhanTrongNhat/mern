// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBriefcase,
//   faPaperPlane,
//   faQuestion,
//   faImage,
//   faCopy,
// } from "@fortawesome/free-solid-svg-icons";
// import { NavItem, NavLink, Nav } from "reactstrap";
// import classNames from "classnames";
// import { Link } from "react-router-dom";

// //import SubMenu from "./SubMenu";

// const SideBar = ({ isOpen, toggle }) => (
//   <div className={classNames("sidebar", { "is-open": isOpen })}>

//     <div className="side-menu">
//       <Nav vertical className="list-unstyled pb-3">
//         <p>Dummy Heading</p>
//         {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
//         <NavItem>
//           <NavLink tag={Link} to={"/about"}>
//             <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
//             About
//           </NavLink>
//         </NavItem>
//         {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
//         <NavItem>
//           <NavLink tag={Link} to={"/pages"}>
//             <FontAwesomeIcon icon={faImage} className="mr-2" />
//             Portfolio
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to={"/faq"}>
//             <FontAwesomeIcon icon={faQuestion} className="mr-2" />
//             FAQ
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to={"/contact"}>
//             <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
//             Contact
//           </NavLink>
//         </NavItem>
//       </Nav>
//     </div>
//   </div>
// );

// // const submenus = [
// //   [
// //     {
// //       title: "Home 1",
// //       target: "Home-1",
// //     },
// //     {
// //       title: "Home 2",
// //       target: "Home-2",
// //     },
// //     {
// //       itle: "Home 3",
// //       target: "Home-3",
// //     },
// //   ],
// //   [
// //     {
// //       title: "Page 1",
// //       target: "Page-1",
// //     },
// //     {
// //       title: "Page 2",
// //       target: "Page-2",
// //     },
// //   ],
// // ];

// export default SideBar;
import React  from "react";
import { Nav, NavItem } from "reactstrap";
import {
 
  faUsers,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Example = (Props) => {
  const { isOpen } = Props;
  return (
    <div className={classNames("sidebar ", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <h3>dashboard of admin</h3>
      </div>
      <Nav vertical>
        <NavItem className="navitem">
          <FontAwesomeIcon icon={faUsers} className="mr-2" />{" "}
          <Link className="linkSideBar" to="/user">
            user
          </Link>
        </NavItem>
        <NavItem className="navitem">
          <FontAwesomeIcon icon={faTshirt} className="mr-2" />{" "}
          <Link className="linkSideBar" to="/products">
            products
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Example;
