import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CustomVNav = () => {
  const navigate = useNavigate();
  return (
    <Nav vertical>
      <NavItem>
        <NavLink onClick={() => navigate("/dashboard")}>Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={() => navigate("/auth/login")}>Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
    </Nav>
  );
};

export default CustomVNav;
