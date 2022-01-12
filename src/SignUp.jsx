import React from "react";
import { Container } from "react-bootstrap";
import SignIn from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

export default function SignUp() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignIn />
        </div>
      </Container>
    </AuthProvider>
  );
}
