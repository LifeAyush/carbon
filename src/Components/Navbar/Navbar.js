import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/Images/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navItems = [
    {
      id: 1,
      name: "Services",
      url: "/services",
    },
    {
      id: 2,
      name: "Resources",
      url: "/resources",
    },
    {
      id: 3,
      name: "About Us",
      url: "/about-us",
    },
    {
      id: 4,
      name: "Partners",
      url: "/partners",
    },
    {
      id: 5,
      name: "Careers",
      url: "/careers",
    },
  ];
  return (
    <div className="nav">
      <img src={logo} alt="Carbon UTurn" className="nav-logo" />
      <div className="nav-controls">
        {navItems.map((item) => {
          return (
            <NavLink
              to={item.url}
              key={item.id}
              className={active === item.name ? "nav-item-active" : "nav-item"}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="balancing-div">
        <button className="nav-cta">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
