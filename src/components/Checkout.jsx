import React from "react";
import Button from "@mui/material/Button";

export default function Checkout() {
  // function greeting() {
  //   alert("checkout Successfull");
  //   console.log("button was clicked");
  // }

  // useEffect(() => {
  //   getCheckout();
  // }, []);

  function getCheckout() {
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => console.error(err.error));
  }

  return (
    <div style={{ marginLeft: "2em", color: "whitesmoke" }}>
      <Button variant="contained" color="success" onClick={getCheckout}>
        Checkout
      </Button>
    </div>
  );
}
