import React from "react";
import TourCard from "./TourEntry";
import data from "./Server/data";
import Cart from "./components/Cart";
import "./styles/index.css";
import MainCarousel from "./components/Carousel";
import logo from "./Assets/logo.png";

function createTourEntry(tour) {
  return (
    <TourCard
      key={tour.id}
      name={tour.name}
      price={tour.price}
      avatar={tour.avatar}
      brief={tour.brief}
      duration={tour.duration}
      image={tour.image}
      description={tour.description}
      item={tour}
    />
  );
}

function CustomTour() {
  return (
    <div className="customTourContainer">
      <h1 className="logo">
        <img src={logo} alt="Logo" />
      </h1>
      <MainCarousel />
      <div className="customTourContent">
        <h1 style={{ fontSize: "40px", color: "white" }}>Custom Tour info</h1>
      </div>
      <div className="customTourMainContainer">
        <div className="customTourContentConainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolores dignissimos, voluptatum quo fuga iure nihil adipisci atque
            saepe rerum laboriosam illum qui quae, eius incidunt laudantium?
            Odit, doloremque culpa.
          </p>
          <p>
            More info here: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Optio sed suscipit dolorum cum ea ad qui quis exercitationem
            omnis, distinctio nam nulla dolorem! Accusamus iste ex recusandae,
            nobis eligendi illum.
          </p>
        </div>
      </div>
      <div className="cardContainer">
        <div className="cardGroup">{data.map(createTourEntry)}</div>

        <Cart />
      </div>
    </div>
  );
}

export default CustomTour;
