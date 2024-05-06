import React from "react";
import Banner from "../../components/Banner";
import ListRestaurants from "../../components/ListRestaurants";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function RestaurantsShowcase() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListRestaurants />
      <Footer />
    </>
  );
}

export default RestaurantsShowcase;
