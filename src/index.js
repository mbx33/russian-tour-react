import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <HashRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>,
  document.getElementById("root")
);
