import React from "react";
import "./Banner.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Banner = () => {
  return (
    <div>
      <div className="banner-wrapper">
        <div className="paddings innerWidth flexCenter banner-container">
          <div className="flexColStart banner-left">
            <div className="banner-tittle">
              <div className="rounde-circle"></div>
              <h1>
                Connect Us <br /> to discover <br /> Property
              </h1>
            </div>
            <div className="flexColStart banner-des">
              <span className="secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                magni.
              </span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
            <div className="flexCenter banner-search">
              <HiLocationMarker
                color="var(--blue)"
                size={25}
              ></HiLocationMarker>
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" start={8800} end={9000} duration={4}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" start={130} end={230} duration={4}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Clients</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" end={13}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryText">Awards</span>
              </div>
            </div>
          </div>
          <div className="banner-right">
            <div className="img-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
