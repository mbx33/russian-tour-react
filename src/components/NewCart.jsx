import React from "react";
import { useCart } from "react-use-cart";
import Checkout from "./Checkout";
import "../styles/cart.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NewCart() {
  const {
    isEmpty,
    totalUniqueItems,
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
        <h5>
          Added Tours ({totalUniqueItems}) Total Tours: ({totalItems})
        </h5>
        <table>
          <tbody>
            {items.map((tour) => {
              return (
                <Card key={tour.id} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={tour.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {tour.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity ({tour.quantity}){tour.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => removeItem(tour.id)} size="small">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Total: ${cartTotal}</h2>
      </div>
      <div>
        <button onClick={() => emptyCart()}>Empty Cart</button>
        <Checkout />
      </div>
    </section>
  );
}

export default NewCart;
