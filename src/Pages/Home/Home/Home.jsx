import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Companies from "../Companies/Companies";
import Residence from "../Residence/Residence";
import Value from "../Value/Value";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <div className="effect"></div>
        <Nav></Nav>
        <Banner></Banner>
      </div>
      <Companies></Companies>
      <Residence></Residence>
      <Value></Value>
    </div>
  );
};

export default Home;
