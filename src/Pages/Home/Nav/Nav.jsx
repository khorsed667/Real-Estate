import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <section className="nav-container">
            <div className="flexCenter paddings innerWidth nav-area">
                <img src="./logo.png" alt="logo" width={100} />
                <div className="flexCenter nav-items">
                    <a className="secondaryText" href="">Residence</a>
                    <a className="secondaryText" href="">Contact Us</a>
                    <a className="secondaryText" href="">Our value</a>
                    <a className="secondaryText" href="">Get started</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Nav;