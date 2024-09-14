import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav.jsx";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;
