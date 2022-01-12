import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import Login from "./Login";
import CustomTour from "./CustomTours";
import Tours from "./Tours";
import Forgot from "./Forgot";
import MainDash from "./DashboardPage";
import SignUpPage from "./SignUpPage";
import CheckoutPage from "./CheckoutPage";
import Review from "./components/Review";
import TravelTips from "./TipsPage";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/tours" component={Tours} />
    <Route path="/custom_tours" component={CustomTour} />
    <Route path="/blog" component={Blog} />
    <Route path="/travel_tips" component={TravelTips} />
    <Route path="/login" component={Login} />
    <Route path="/forgot-password" component={Forgot} />
    <Route path="/dashboard" component={MainDash} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="/review" component={Review} />
  </Switch>
);
