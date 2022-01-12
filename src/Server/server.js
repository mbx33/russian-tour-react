require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
// app.use(express.static("public"));
app.use(cors());

const privateKey = process.env.REACT_APP_STRIPE_PRIVATE_KEY;

app.use(express.urlencoded({ extended: false }));
const stripe = require("stripe")(privateKey);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "The Hermitage" }],
  [2, { priceInCents: 20000, name: "Peterhof" }],
  [3, { priceInCents: 5000, name: "Walking Tour" }],
  [4, { priceInCents: 3000, name: "Faberzhe Museum" }],
]);

//Creating the stripe url session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:3000/custom_tours`,
      cancel_url: `http://localhost:3000/custom_tours`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//connect to mongodb

const mongodb = process.env.REACT_APP_MONGODB_URL;

mongoose.connect(mongodb);

//data schema
const itemSchema = {
  title: String,
  description: String,
};

const tourSchema = {
  title: String,
  duration: Number,
  description: String,
};

//data model
const Item = mongoose.model("Item", itemSchema);

const Tour = mongoose.model("Tour", tourSchema);

//read route
app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json("Error " + err));
});

app.get("/myTours", (req, res) => {
  Tour.find()
    .then((tours) => res.status(200).json(tours))
    .catch((err) => res.status(400).json("Error " + err));
});

//create route

app.post("/newItem", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
  });
  newItem
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});

//delete route
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("item deleted");
    } else {
      console.log(err);
    }
  });
});

//update route
app.put("/put/:id", (req, res) => {
  const updatedItem = {
    title: req.body.title,
    description: req.body.description,
  };

  Item.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedItem },
    (req, res, err) => {
      if (!err) {
        console.log("item updated");
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(5050, () => console.log("Server Listening on port 5050"));
