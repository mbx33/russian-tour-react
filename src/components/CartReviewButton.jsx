import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CartReviewButton() {
  function changeBackground(e) {
    e.target.style.background = "blue";
  }

  function changeBackgroundAgain(e) {
    e.target.style.background = "#2e002e";
  }

  return (
    <div style={{ color: "whitesmoke" }}>
      <Link
        to="/checkout"
        className="navLinks"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundAgain}
          style={{
            marginTop: "1em",
            marginBottom: "1em",
            backgroundColor: "#2e002e",
          }}
        >
          Review Cart
        </Button>
      </Link>
    </div>
  );
}
