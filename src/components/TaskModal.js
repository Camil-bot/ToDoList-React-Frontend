import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskModal = (props) => {
  const [modal, setModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState("");
  const toggle = () => setModal(!modal);
  const navigate = useNavigate();

  function handleTaskPost() {
    // se poate face printr-o functie data ca props si apelata si aici
    console.log("a intrat"); // si sa faca din nou call-ul sa fetch-uiasca task-urile
    axios // de facut error sending,handling...
      .post(
        "http://localhost:5000/tasks",
        {
          taskTitle: taskTitle
        },
        { headers: { Authorization: localStorage.getItem("Authorization") } }
      )
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
          console.log(err);
          setError(err);
          return;
        }
      );
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            value={taskTitle}
            name="title"
            placeholder="title"
            type="text"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleTaskPost();
              toggle();
            }}
          >
            Do Something
          </Button>
          <h1>{taskTitle}</h1>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskModal;
