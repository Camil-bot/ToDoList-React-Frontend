import React from "react";
import { Navbar, NavbarBrand, Button, NavItem } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  async function logout() {
    const res = await axios.patch(
      "http://localhost:5000/session",
      {},
      {
        headers: { authorization: localStorage.getItem("Authorization") }
      }
    );
    setMessage(res.data);
    localStorage.removeItem("Authorization");
    navigate(0);
  }

  return (
    <>
      <Navbar
        className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        color="dark"
      >
        <NavbarBrand>ToDoList</NavbarBrand>
        <NavItem>
          {localStorage.Authorization ? (
            <Button className="bg-danger" onClick={logout}>
              Logout
            </Button>
          ) : null}
        </NavItem>
      </Navbar>
    </>
  );
};

export default Header;
