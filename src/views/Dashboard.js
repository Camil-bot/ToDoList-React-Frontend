import React, { isValidElement, useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "../components/CustomCard";
import TaskModal from "../components/TaskModal";
import { CardGroup } from "reactstrap";
import CustomVNav from "../components/CustomVNav";

const Dashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks", {
        headers: {
          Authorization: localStorage.getItem("Authorization")
        }
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 d-none d-md-block bg-light sidebar-sticky">
            {/* <div className="sidebar-sticky"> */}
            <CustomVNav />
            {/* </div> */}
          </div>
          <div className="col-md-9 ml-sm-auto ">
            <div className="row gy-5">
              {data.task.map((task) => (
                <div className="col-md-4">
                  <CustomCard key={task} title={task.title} />
                </div>
              ))}
              <div className="row text-center fixed-bottom gy-2">
                <TaskModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
