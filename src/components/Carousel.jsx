import React from "react";
import Carousel from "react-bootstrap/Carousel";
import myPhoto from "../Assets/peterhof.jpg";
import moika from "../Assets/moika.jpg";
import port from "../Assets/Cruise.jpeg.jpg";
import peterhof from "../Assets/peterhof1.jpg";
import bridge from "../Assets/winterbridge.jpeg";

export default function MainCarousel() {
  return (
    <div>
      <Carousel controls={false}>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: "93vh" }}
            src={myPhoto}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: "93vh" }}
            src={moika}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: "93vh" }}
            src={bridge}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: "93vh" }}
            src={peterhof}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: "93vh" }}
            src={port}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
