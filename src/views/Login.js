import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function checkEmail(email) {
    //check this shit ca nu sunt sigur de ea
    return email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) !== null
      ? true
      : false;
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!checkEmail(email)) {
      setError("Invalid email format"); //works
      return;
    }
    if (!email || !password) {
      setError("pass or email undefined");
      return;
    }

    axios
      .post("http://localhost:5000/auth/login", {
        email: email,
        password: password
      })
      .then(
        (response) => {
          if (response.data.error != "200") {
            setError(response.data.message);
            return;
          }
          window.localStorage.setItem(
            "Authorization",
            response.data.Authorization
          );
          navigate("/admin/dashboard");
          return;
        },
        (err) => {
          console.log(err);
          setError(err);
          return;
        }
      );
  }

  return (
    <Form onSubmit={handleLogin}>
      <FormGroup floating>
        <span className="text-danger">{error}</span>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{" "}
      <FormGroup floating>
        <Input
          id="examplePassword"
          value={password}
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>{" "}
      <Button
        type="submit"
        onClick={(e) => {
          handleLogin(e);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Login;
