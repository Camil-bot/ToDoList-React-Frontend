import React, { useEffect } from "react";
import Header from "../components/Header";
import Tasks from "../views/Tasks";
import Info from "../views/Info";
import Account from "../views/Account";
import CustomVNav from "../components/CustomVerticalNav";
import { Routes, Route,  useNavigate } from "react-router-dom";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row p-4">
          <Header />
        </div>
        <div className="row">
          <div className="col-2 navbar-fixed-left p-4">
            <CustomVNav />
          </div>
          <Routes>
            <Route path="/dashboard" element={<Tasks />} />
            <Route path="/account" element={<Account />} />
            <Route path="/info" element={<Info />} />
            {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AuthenticatedLayout;
