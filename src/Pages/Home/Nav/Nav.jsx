import React, { useState } from "react";
import "./Nav.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const getMenuStyle = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !openMenu && "-100%" };
    }
  };

  return (
    <section className="nav-container">
      <div className="flexCenter paddings innerWidth nav-area">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler 
        onOutsideClick={()=>setOpenMenu(false)}
        >
          <div className="flexCenter nav-items" style={getMenuStyle(openMenu)}>
            <a className="secondaryText" href="">
              Residence
            </a>
            <a className="secondaryText" href="">
              Contact Us
            </a>
            <a className="secondaryText" href="">
              Our value
            </a>
            <a className="secondaryText" href="">
              Get started
            </a>
            <button className="nav-button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setOpenMenu((prev) => !prev)}>
          <BiMenuAltRight size={30}></BiMenuAltRight>
        </div>
      </div>
    </section>
  );
};

export default Nav;
