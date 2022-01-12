import React from "react";
import SignUp from "./SignUp";
import logo from "./Assets/logo.png";

export default function SignUpPage() {
  return (
    <div>
      <section style={{ height: "100%", marginTop: "10em" }}>
        <h1 className="logo">
          <img src={logo} alt="Logo" />
        </h1>
        <SignUp />
      </section>
    </div>
  );
}
