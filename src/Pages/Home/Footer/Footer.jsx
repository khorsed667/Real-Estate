import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Minima facere qui vel? Quis, illum officia.
          </span>
        </div>
        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">136 Uttara, Dhaka, Bangladesh</span>
          <div className="flexCenter footer-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
