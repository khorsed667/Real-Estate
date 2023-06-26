import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "./../../../utils/accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";

const Value = () => {
  return (
    <section className="value-section">
      <div className="paddings innerWidth flexCenter value-container">
        <div className="value-left">
          <div className="img-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart value-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we provide to you</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            animi.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
                const [className, setClassName] = useState(null)
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <p className="primaryText">{item.heading}</p>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown
                          size={20}
                        ></MdOutlineArrowDropDown>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText ">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
