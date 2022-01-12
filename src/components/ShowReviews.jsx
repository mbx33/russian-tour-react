import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/showReviews.css";
import { BsChatLeftQuote } from "react-icons/bs";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ShowReviews = () => {
  const [items, setItems] = useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = () => {
    axios
      .get("/items")
      .then((res) => {
        setItems(res.data);
        console.log(items);
      })
      .catch((err) => console.log(err));
  };
  function changeBackground(e) {
    e.target.style.background = "blue";
  }

  function changeBackgroundAgain(e) {
    e.target.style.background = "#2e002e";
  }

  return (
    <div className="reviewContainer">
      <div>
        <section>
          <div className="titleReview">
            <h2>Our Reviews</h2>
            <BsChatLeftQuote />
          </div>
          <div>
            {items.map((item) => (
              <div key={item._id}>
                <h3 style={{ marginTop: "1em" }}>{item.title}:</h3>
                <div className="reviews">
                  <FaQuoteLeft className="quotes" />
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/review"
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
              Leave a Review
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ShowReviews;
