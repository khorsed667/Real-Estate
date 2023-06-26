import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residence.css";
import { sliderSettings } from "../../../utils/sliderFn";
import data from "./../../../utils/slider.json";

const Residence = () => {
  return (
    <section className="swiper-section">
      <div className="paddings innerWidth swiper-container">
        <div className="flexColStart swiper-header">
          <p className="orangeText">Best Choice</p>
          <p className="primaryText">Popular Residencies</p>
        </div>

        <Swiper {...sliderSettings}>
          <SlideButtons></SlideButtons>
          {data.map((res, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart swiper-card">
                <img src={res.image} alt="home" />
                <span className="secondaryText res-price">
                  <span className="orangeText">$</span>
                  <span>{res.price}</span>
                </span>
                <span className="primaryText">{res.name}</span>
                <span className="secondaryText">{res.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;

const SlideButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}