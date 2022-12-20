import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../views/Login";
import Register from "../views/Register";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  BrowserRouter
} from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      return;
    }
    navigate("/admin/dashboard");
  }, []);

  return (
    <>
      <Header />

      <Routes>
        {/* randeaza view  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};

export default AuthLayout;
