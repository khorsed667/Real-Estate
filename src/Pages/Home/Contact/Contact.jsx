import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="paddings innerWidth flexCenter contact-container">
        <div className="contact-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact with us</span>
          <span className="secondaryText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            soluta sapiente molestiae perferendis vero. Libero.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}></MdCall>
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">01234567891</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                        Call Now
                    </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">01234567891</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                        Chat Now
                    </div>
                </div>
            </div>
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Video Call</span>
                            <span className="secondaryText">01234567891</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                        Video Call Now
                    </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}></HiChatBubbleBottomCenter>
                        </div>
                        <div className="flexColStart details">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">01234567891</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                        Message Now
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="img-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
