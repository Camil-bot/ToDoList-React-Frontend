import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import TaskComponent from "../components/TaskComponent";
import TaskModal from "../components/TaskModal";

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const getTasks = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/tasks", {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    });
    console.log(response.status);
    if (response.status === 200) {
      setTasks(response.data.tasks);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  if (tasks == null) {
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
          {tasks.map((task, index) => (
            <div className="col-md-3">
              <TaskComponent
                key={index}
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
