import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Account = () => {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/userInfo", {
        headers: {
          Authorization: localStorage.getItem("Authorization")
        }
      })
      .then((res) => {
        setInfo(res.data.userInfo);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="col-md-10 ml-sm-auto text-center ">
        <div className="row gy-5 p-3">
          <div className="col">
            <div>Account</div>
            <div>Hi {info.name}</div>
            <div>Your email is : {info.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
