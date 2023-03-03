import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { HiMenu } from "react-icons/hi";
import { FaRegWindowClose } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const navigations = [
    { _id: 1, name: "Home" },
    { _id: 2, name: "About" },
    { _id: 3, name: "Articles" },
    { _id: 4, name: "Contact" },
    { _id: 5, name: "Publish" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  const changeMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* nav */}
        <nav>
          <ul className="header__navbar">
            {navigations.map((item) => (
              <Link
                to={`/${item.name}`}
                key={item._id}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* mobile view menu */}
        <div className="mobile__view">
          <div className="open__menu" onClick={changeMenu}>
            {!open && <HiMenu />}
          </div>
          <div className="open__menu">
            {open && <FaRegWindowClose onClick={closeMenu} />}
          </div>
        </div>
      </div>
      {/* mobile menu must be under header section */}
      {open && (
        <>
          <nav>
            <ul
              className="mobile__navigation"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {navigations.map((item) => (
                <Link
                  key={item._id}
                  to={`/${item.name}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <li className="mobile__link">{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Header;
