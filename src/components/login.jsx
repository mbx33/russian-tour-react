import React, { useRef, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function LoggingIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/custom_tours");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card style={{ marginTop: "5em" }}>
        <Card.Body>
          <h2 className="text center mb-4">Login</h2>
          {error && <Alert severity="error">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              style={{ marginTop: "1em" }}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div
            className="w-100 text-center mt-3"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div
        className="w-100 text-center mt-2"
        style={{ backgroundColor: "whitesmoke" }}
      >
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
