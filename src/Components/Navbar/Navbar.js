import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../Assets/Images/logo.svg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos && currentScrollPos > 100);
    if (currentScrollPos === 0) setVisible(true);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  //console.log(visible);
  const navItems = [
    {
      id: 1,
      name: "Services",
      url: "/",
    },
    {
      id: 2,
      name: "Resources",
      url: "/",
    },
    {
      id: 3,
      name: "About Us",
      url: "/",
    },
    {
      id: 4,
      name: "Partners",
      url: "/",
    },
    {
      id: 5,
      name: "Careers",
      url: "/",
    },
  ];
  return (
    <div className={visible ? "nav" : "nav-inv"}>
      <Link to="/">
        <img src={logo} alt="Carbon UTurn" className="nav-logo" />
      </Link>
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
        <a href="#next-section"><div className="nav-cta">Get Started</div></a>
      </div>
    </div>
  );
};

export default Navbar;
