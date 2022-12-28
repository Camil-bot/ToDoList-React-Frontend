import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
  Spinner
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TaskComponent(props) {
  const [isSolved, setIsSolved] = useState(false);
  const [error, setError] = useState("");

  const [isSolving, setIsSolving] = useState(false);
  const navigate = useNavigate();

  function setAsSolvedUnsolved() {
    setIsSolved(!isSolved);
    setIsSolving(true);
    axios
      .patch(
        "http://localhost:5000/tasks",
        { taskID: props.taskID, solved: isSolved },
        { headers: { Authorization: localStorage.getItem("Authorization") } }
      )
      .then(
        (response) => {
          setIsSolving(false);
          if (response.data.error != "200") {
            setError(response.data.message);
            console.log(response);
            props.getTasks();
            return;
          }
        },
        (err) => {
          setIsSolving(false);
          setError(err);
          return;
        }
      );
  }

  function deteleTask() {
    axios
      .delete("http://localhost:5000/tasks", {
        headers: { Authorization: localStorage.getItem("Authorization") },
        data: { taskID: props.taskID }
      })
      .then(
        (response) => {
          if (response.data.error != "200") {
            setError(response.data.message);
            console.log(response);
            navigate(0);
            return;
          }
        },
        (err) => {
          setError(err);
          return;
        }
      );
  }

  return (
    <>
      <Card
        style={{
          width: "18rem"
        }}
        key={props.taskID}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Stau sub titlu, ca sunt subtitle
          </CardSubtitle>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-6">
                <Button onClick={deteleTask}>Delete</Button>
              </div>
              <div className="col-6">
                <Button
                  onClick={setAsSolvedUnsolved}
                  color={props.solved ? "success" : "danger"}
                >
                  {props.solved ? "Solved" : "Unsolved"}
                </Button>
              </div>
              <div className="col">
                {isSolving ? (
                  <Spinner animation="border" role="status">
                    Loading...
                  </Spinner>
                ) : null}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default TaskComponent;
