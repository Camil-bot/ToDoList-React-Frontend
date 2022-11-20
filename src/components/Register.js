import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Register = () => {
  return (
    <Form>
      <FormGroup>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Retype Password"
          type="password"
        />
      </FormGroup>
      <Button>Register</Button>
    </Form>
  );
};

export default Register;
