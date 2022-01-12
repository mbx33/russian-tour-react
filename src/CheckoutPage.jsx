import React from "react";
import logo from "./Assets/logo.png";
import Cart from "./components/Cart";
import "./styles/checkoutPage.css";
import banner from "./Assets/artist-stpeter-collage.jpg";

export default function CheckoutPage() {
  return (
    <div style={{ color: "white" }}>
      <h1 className="logo">
        <img src={logo} alt="Logo" />
      </h1>
      <div>
        <img src={banner} alt="" className="banner" />
      </div>
      {/* <div className="cartTitle">
        <h2>Your Tours</h2>
      </div> */}
      <main classname="cartReviewContainer">
        <section className="cartInfo">
          <Cart />
        </section>
      </main>
    </div>
  );
}
