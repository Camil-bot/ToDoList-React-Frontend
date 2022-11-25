import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  function checkEmail(email) {
    //check this shit ca nu sunt sigur de ea
    return email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) !== null
      ? true
      : false;
  }

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
        email: email,
        password: password
      })
      .then((response, err) => {
        console.log(response);
        console.log(err);
      });
  }

  return (
    <Form>
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
