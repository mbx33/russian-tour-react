import React from "react";
import { useCart } from "react-use-cart";
import Checkout from "./Checkout";
import "../styles/cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "react-bootstrap/Button";
import CartReviewButton from "./CartReviewButton";

function Cart() {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 style={{ color: "whitesmoke" }}>Add a Tour:</h1>;

  

  return (
    <section className="cartContainer">
      <div>
        <h2>Tours Added:</h2>
        <CartReviewButton />
        <h5>
          {/* Added Tours ({totalUniqueItems})  */}
          Total Tours: {totalItems}
        </h5>
        <table>
          <tbody>
            {items.map((tour) => {
              return (
                <tr key={tour.id} className="tableRows">
                  <td>{tour.avatar}</td>
                  <td>
                    <img src={tour.image} alt="" style={{ height: "6rem" }} />
                  </td>
                  <td>{tour.name}</td>
                  <td>Cost ${tour.price}</td>
                  <td>Quantity ({tour.quantity})</td>
                  <td>
                    <IconButton
                      aria-label="delete"
                      size="large"
                      style={{ color: "#dc493a" }}
                      onClick={() => removeItem(tour.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    {/* <button onClick={() => removeItem(tour.id)}>Remove</button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Total: ${cartTotal}</h2>
      </div>
      <div className="checkoutButtons">
        <Button variant="danger" onClick={() => emptyCart()}>
          Empty Cart
        </Button>

        <Checkout />
      </div>
    </section>
  );
}

export default Cart;
