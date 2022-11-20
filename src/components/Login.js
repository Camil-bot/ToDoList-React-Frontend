import React from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

const Login = () => {
  return (
    <Form>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{" "}
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>{" "}
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
