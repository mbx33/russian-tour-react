import React from "react";
import "./styles/index.css";
// import ReactPlayer from "react-player";
import logo from "./Assets/logo.png";
import SignIn from "./SignUp";
import ShowReviews from "./components/ShowReviews";
import { Link } from "react-router-dom";
import { SiYourtraveldottv, SiGooglechat } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import heroImage from "./Assets/Cruise.jpeg.jpg";

function HomePage() {
  return (
    <div className="homePage">
      <h1 className="logo">
        <img src={logo} alt="Logo" />
      </h1>

      <main className="mainContainer">
        <h1 style={{ fontSize: "40px", padding: "10px" }}>
          Royal Russian Tours
        </h1>
        <div>
          <img src={heroImage} alt="main-pic" />
        </div>

        <p style={{ fontSize: "20px", textAlign: "center", width: "70%" }}>
          Welcome, my name is Matt. I've been living in St. Petersburg for over
          10 years now. As an American living in Russia, I bring a unique
          perspective of this great city. I can help you plan and make the most
          of your trip to Russia. I know the majority of travellers to St
          Petersburg come by cruise ship. We have many options for you, and your
          group of travellers. I want to make your trip stress free so that you
          can make the most of your time here. I guarantee that you will have so
          many memorable moments here. The prices are some of the lowest but
          your memories you'll leave with will be priceless.
          <br />
          <Link
            to="/custom_tours"
            className="navLinks"
            // style={{ textDecoration: "none" }}
          >
            Build your custom itinerary!
          </Link>
        </p>

        <div className="homeIconContainer">
          <section className="travelTipIcon">
            <SiYourtraveldottv
              style={{ fontSize: "60px", marginBottom: ".4em" }}
            />
            <p>
              Travel tips and helpful guides to make this one of your greatest
              trips
            </p>
            learn more
          </section>
          <section className="communicateContainer">
            <SiGooglechat style={{ fontSize: "60px", marginBottom: ".4em" }} />
            <p>Communicate with us every step of the way</p>
            <span>
              We will help you every step of the way and make sure your trip
              will be exactly what you want
            </span>
          </section>
          <section className="tripPlannerIcon">
            <GiCommercialAirplane
              style={{ fontSize: "60px", marginBottom: ".4em" }}
            />
            <p>Professional Travel & Trip planning </p>
            Learn more
          </section>
        </div>
      </main>

      <div>
        <SignIn />
      </div>
      <article>
        <ShowReviews />
      </article>
      <div style={{ marginTop: "3em" }}>
        <h5 style={{ backgroundColor: "whitesmoke" }}>Contact Info</h5>
        <p style={{ color: "whitesmoke" }}>Telephone: 838-000-1897</p>
        <p style={{ color: "whitesmoke" }}>Email: rrt@sptours.com</p>
      </div>
    </div>
  );
}

export default HomePage;

//Still need to add the hero video from desktop
