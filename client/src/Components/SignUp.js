import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./LoginScreen";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_NEW_USER } from "../graphql/mutation";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { error, loading, data }] = useMutation(
    REGISTER_NEW_USER,
    {
      variables: { username, firstname, lastname, email, password },
    }
  );

  const onSubmit = (e) => {
    e.preventdefault();
    registerUser(username, firstname, lastname, email, password);
    console.log("clicked");
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">SignUp</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="username"
                  onChange={(e) => e.target.value}
                />
              </Form.Group>
              <Form.Group id="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="first name"
                  onChange={(e) => e.target.value}
                />
              </Form.Group>
              <Form.Group id="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="last name"
                  onChange={(e) => e.target.value}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="email"
                  onChange={(e) => e.target.value}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="password"
                  onChange={(e) => e.target.value}
                />
              </Form.Group>

              <Button className="w-100" type="submit">
                SignUp
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
