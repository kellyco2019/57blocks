import React from 'react'
import { useState } from 'react'
import { Button, Form, Container, Col, Row} from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useAuth from "../auth/useAuth";

let schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

function LogIn() {
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const [password, setPassword] = useState('')
  const auth = useAuth();
  const history = useHistory('/home');
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  function createUser() {
    auth.login();
    localStorage.setItem("email", JSON.stringify(email))
    history.push("/");
    reset();
  }

  return (

<Container>
  <Row>
    <Col md={{ span: 6, offset: 3 }}> 
    <Form noValidate onSubmit={handleSubmit(createUser)}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label> Email address</Form.Label>
        <Form.Control
          {...register("email")}
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        <p>{errors.email?.message}</p>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label >Password</Form.Label>
        <Form.Control
          {...register("password")}
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className={`form-control ${errors.password ? "is-invalid" : ""
            }`}
        />
        <p>{errors.password?.message} </p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
  </Row>
</Container>
    
  )
}
export default LogIn