import React from "react";
import "./Started.css";

const Started = () => {
  return (
    <section className="started-section">
      <div className="paddings innerWidth started-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero
            adipisci nisi repellat ullam, consequatur voluptas?
            <br />
            Itaque, reprehenderit! Impedit, harum?
          </span>
          <button className="button">
            <a href="mailto:khorsedalam667@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Started;
