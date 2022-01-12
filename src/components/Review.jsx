import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/leaveReview.css";

export default function Review() {
  const [item, setItem] = useState({
    title: "",
    description: "",
  });
  const [items, setItems] = useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);

  const styleBack =
    "https://www.transparenttextures.com/patterns/grey-jean.png";

  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    fetch("/items")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [items]);

  function handleChange(e) {
    const { name, value } = e.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    };

    axios.post("/newItem", newItem);
    alert("Review Added");
    setItem({
      title: "",
      description: "",
    });
  }

  function deleteItem(id) {
    axios.delete("/delete/" + id);
    alert("Item Deleted");
  }

  // function openUpdate(id) {
  //   setIsPut(true);
  //   setUpdatedItem((prevInput) => {
  //     return {
  //       ...prevInput,
  //       id: "id",
  //     };
  //   });
  // }

  function updateItem(id) {
    axios.put("/put/" + id, updatedItem);
    alert(`Successfully changed your review`);
    setIsPut(false);
    setUpdatedItem("");
  }

  function handleUpdate(event) {
    const { name, value } = event.target;
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <div
      style={{ color: "white", marginTop: "10em" }}
      className="mainReviewContainer"
    >
      <h3
        style={{
          color: "white",
          marginLeft: "18em",
          textDecoration: "underline",
          marginBottom: "1em",
        }}
      >
        Say Something about us
      </h3>
      {!isPut ? (
        <div className="addReviewContainer">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={handleChange}
              name="title"
              value={item.title}
              required
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              onChange={handleChange}
              name="description"
              value={item.description}
              required
            ></TextField>
          </Box>
          <Button variant="contained" onClick={addItem}>
            Add Review
          </Button>
        </div>
      ) : (
        <div>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={handleUpdate}
              name="title"
              value={updatedItem.title}
              required
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              onChange={handleUpdate}
              name="description"
              value={updatedItem.description}
              required
            ></TextField>
          </Box>
          <Button
            variant="contained"
            onClick={() => updateItem(updatedItem.id)}
          >
            Update Item
          </Button>
        </div>
      )}

      {items.map((item) => {
        return (
          <div
            key={item._id}
            style={{
              backgroundImage: { styleBack },
              backgroundColor: "#fbfbfb",
              width: "40%",
              marginLeft: "30%",
              marginTop: "2em",
            }}
          >
            <h4 style={{ color: "black" }}>{item.title}</h4>
            <p style={{ color: "black" }}>{item.description}</p>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
            {/* <button onClick={() => openUpdate(item._id)}>Update</button> */}
          </div>
        );
      })}
    </div>
  );
}
