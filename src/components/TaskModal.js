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
    axios
      .post(
        process.env.REACT_APP_API_URL + "/tasks",
        {
          taskTitle: taskTitle
        },
        { headers: { Authorization: localStorage.getItem("Authorization") } }
      )
      .then(
        (response) => {
          console.log(response);
          if (response.data.error != "200") {
            setError(response.data.message);
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
            Post
          </Button>
          <Button type="submit" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskModal;
