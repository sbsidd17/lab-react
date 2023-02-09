import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./style.scss";
import { navMenus } from "./config";

function Navbar() {
  const [click, setClick] = useState(false);
  function clickHandle() {
    setClick(!click);
  }
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to={"/"} className="nav-container-logo">
          <FaReact size={32} />
        </Link>
        <ul
          className={click ? "nav-container-menu active" : "nav-container-menu"}
        >
          {navMenus.map((item, key) => {
            return (
              <Link to={item.to} key={key} className="nav-container-menu-list">
                {item.lable}
              </Link>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={clickHandle}>
          {click ? <HiX size={32} /> : <FaBars size={32} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
