import React from "react";
import "./Banner.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion';

const Banner = () => {
  return (
    <div>
      <div className="banner-wrapper">
        <div className="paddings innerWidth flexCenter banner-container">
          <div className="flexColStart banner-left">
            <div className="banner-tittle">
              <div className="rounde-circle"></div>
              <motion.h1
              initial={{y: '2rem', opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration:2,
                type:'ease-in'
              }}
              >
                Discover Endless <br /> Possibilities with  <br /> Homyz
              </motion.h1>
            </div>
            <div className="flexColStart banner-des">
              <span className="secondaryOrangeText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                magni.
              </span>
              <span className="secondaryOrangeText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
            <div className="flexCenter banner-search">
              <HiLocationMarker
                color="var(--orange)"
                size={25}
              ></HiLocationMarker>
              <input type="text" />
              <button className="nav-button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" start={8800} end={9000} duration={3}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryOrangeText">Premium Product</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" start={130} end={230} duration={3}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryOrangeText">Happy Clients</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="count" end={13}></CountUp>
                  <span>+</span>
                </span>
                <span className="secondaryOrangeText">Awards</span>
              </div>
            </div>
          </div>
          <div className="banner-right">
            <motion.div
            initial={{x:'7rem', opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{
              duration:2,
                type:'ease-in'
            }}
            className="img-container">
              <img src="./hero-image.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
