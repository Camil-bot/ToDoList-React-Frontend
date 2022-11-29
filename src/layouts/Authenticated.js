import React, { useEffect } from "react";
import Dashboard from "../views/Dashboard";
import Header from "../components/Header";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </>
  );
};

export default AuthenticatedLayout;
