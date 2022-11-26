import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
// import './App.css';
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
  return (
    <>
      <Header />
      <h1>It worrks from layout</h1>
      <BrowserRouter>
        <Routes>
          {/* randeaza view  */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AuthLayout;
