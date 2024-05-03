import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hamburgerMenu">
      <div className="menuIcon" onClick={toggleMenu}>
        <div className={isOpen ? "bar1 open" : "bar1"}></div>
        <div className={isOpen ? "bar2 open" : "bar2"}></div>
        <div className={isOpen ? "bar3 open" : "bar3"}></div>
      </div>

      <div className={isOpen ? "menuItems open" : "menuItems"}>
        <a href="#">View profile</a>
        <a href="#">Account settings</a>
        <a href="#">Changelog</a>
        <a href="#">Support</a>
        <a href="#">Log out</a>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
