import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../views/Login";
import Register from "../views/Register";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};

export default AuthLayout;
