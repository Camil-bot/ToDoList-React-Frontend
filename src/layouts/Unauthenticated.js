import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthLayout = ({ child }) => {
  const [isReg, setIsReg] = useState(true);

  return (
    <>
      <Header />
      <h1>It worrks</h1>
      {isReg ? <Login /> : <Register />}
    </>
  );
};

export default AuthLayout;
