import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
// import logo from '../../logo.svg';
  
const Navbar = () => {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/innovation" activeStyle>
            Innovation
          </NavLink>
          <NavLink to="/tic-tac-toe" activeStyle>
            Tic Tac Toe Game
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;