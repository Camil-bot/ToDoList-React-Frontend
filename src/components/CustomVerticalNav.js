import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CustomVerticalNav = () => {
  const navigate = useNavigate();
  return (
    <Nav vertical color="dark">
      <NavItem>
        <NavLink href="/admin/dashboard">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/admin/account">Account</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/admin/info">Info</NavLink>
      </NavItem>
    </Nav>
  );
};

export default CustomVerticalNav;
