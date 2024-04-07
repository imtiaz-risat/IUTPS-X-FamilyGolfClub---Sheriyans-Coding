// components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <div id="nav">
      <a href="/">
        <img src="/resources/iutps-logo.png" alt="" />
      </a>
      <a href="/">
        <div className="menu-items"><h4>Home</h4></div>
      </a>
      <a href="/">
        <div className="menu-items"><h4>Our Works</h4></div>
      </a>
      <a href="#about-us">
        <div className="menu-items"><h4>About Us</h4></div>
      </a>
      <a href="#cards-holder">
        <div className="menu-items"><h4>Events</h4></div>
      </a>
    </div>
  );
}

export default NavBar;
