import React from "react";
import ForgotPassword from "./components/ForgotPassword";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import logo from "./Assets/logo.png";

export default function Forgot() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h1 className="logo">
            <img src={logo} alt="Logo" />
          </h1>
          <ForgotPassword />
        </div>
      </Container>
    </AuthProvider>
  );
}
