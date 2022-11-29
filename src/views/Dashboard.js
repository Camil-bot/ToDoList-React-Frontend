import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "../components/CustomCard";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("aici");
    console.log(localStorage.getItem("Authorization"));
    axios
      .get("http://localhost:5000/tasks", {
        headers: {
          Authorization: localStorage.getItem("Authorization")
        }
      })
      .then((response, err) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);
  console.log(data);
  return (
    <>
      {/* {data.map((task) => {
        <CustomCard tasktitle={task.title} />;
      })} */}
    </>
  );
};

export default Dashboard;
