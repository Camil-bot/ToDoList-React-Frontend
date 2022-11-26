import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [registered, setRegistered] = useState(0);

  function checkEmail(email) {
    //check this shit ca nu sunt sigur de ea
    return email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) !== null
      ? true
      : false;
  }

  // useEffect(() => {
  //   navigate("/dashboard");
  // }, [registered]); to be implemented...idk

  function handleRegister(e) {
    e.preventDefault();

    if (checkEmail(email) === false) {
      setErrorEmail("Invalid email format"); //works
      return;
    }

    if (password !== password2) {
      setErrorPassword("Passwords do not match");
      console.log(errorPassword);
      return;
    }
    axios
      .post("http://localhost:5000/auth/register", {
        name: userName,
        email: email,
        password: password
      })
      .then((response, err) => {
        console.log(response.data.msg);
        if (response.data.msg === "OK") {
          setRegistered((prevRegistered) => prevRegistered + 1);
        }
        // window.localStorage.setItem("registered", response.data.msg); nus daca aci tre sa il tin in local sau doar sa folosesc un useState,
        //ma gandesc ca useState in conditiile in care,poate crea mai multe conturi
        console.log(err);
        return;
      });
  }

  return (
    <Form>
      <FormGroup>
        <Input
          id="userName"
          name="userName"
          value={userName}
          placeholder="name"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="exampleEmail"
          name="email"
          value={email}
          placeholder="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="password"
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="password2"
          name="password2"
          placeholder="Retype Password"
          type="password"
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
      </FormGroup>
      <Button onClick={(e) => handleRegister(e)}>Register</Button>
    </Form>
  );
};

export default Register;
