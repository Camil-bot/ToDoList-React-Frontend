import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import TaskComponent from "../components/TaskComponent";
import TaskModal from "../components/TaskModal";

const Tasks = () => {
  const [data, setData] = useState(null);
  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/tasks", {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    });

    setData(response.data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  if (data == null) {
    return (
      <>
        <div className="col-md-10 ml-sm-auto ">
          <div className="align-self-center">
            <div className="row gy-5 p-3">
              <Spinner animation="border" role="status">
                Loading...
              </Spinner>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="col-md-10 ml-sm-auto ">
        <div className="row gy-5 p-3">
          {data.task.map((task) => (
            <div className="col-md-3">
              {console.log(task._id)}
              <TaskComponent
                key={task._id}
                title={task.title}
                taskID={task._id}
                solved={task.solved}
                getTasks={getTasks}
              />
            </div>
          ))}
          <div className="text-center fixed-bottom gy-2">
            <TaskModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
