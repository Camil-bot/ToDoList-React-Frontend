import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(0); //ikd how to do this with bools

  useEffect(() => {
    console.log("am intrat");
    if (
      localStorage.getItem("Authorization") === null ||
      localStorage.getItem("Authorization") === "undefined"
    ) {
      console.log("sunt in if");
      setError("Unauthorized");
      return;
    }
    console.log("am iesti");
    navigate("/dashboard");
  }, [submitted]);

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
    if (checkEmail(email) === false) {
      setError("Invalid email format"); //works
      return;
    }
    axios
      .post("http://localhost:5000/auth/login", {
        email: email,
        password: password
      })
      .then(
        (response) => {
          window.localStorage.setItem(
            "Authorization",
            response.data.Authorization
          );
          setSubmitted((prevSubmitted) => prevSubmitted + 1); //deci m-am prins ca pleca use-efect-ul inainte de stocarea authorizarii in localStorage, nus insa daca asa se procedeaza cum am facut aci
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
    <Form>
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
        <h2>{password}</h2>
        <Label for="examplePassword">Password</Label>
      </FormGroup>{" "}
      <Button
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
