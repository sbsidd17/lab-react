import React, { useState } from "react";
import "./style.scss";

function ThemeSwitcher() {
  const [click , setClick] = useState(false); 

  const clickHandler = ()=>{
    setClick(!click); 
  }

  const getColor = (e)=>{
    setClick(!click);
    document.documentElement.style.setProperty('--selected-theme-main-color',e.target.style.backgroundColor);
  }
  const themeColors = ["#04e54b", "#f60505", "#05f6f2", "#ffdd40"];
  return (
    <>
      <div className="theme-icon" onClick={clickHandler}>
        <i className="ri-settings-3-fill"></i>
      </div>
      <div className={click ? "theme-switcher-container active" : "theme-switcher-container"}>
        <h1>Select Theme</h1>
        <ul>
          {themeColors.map((color, key) => {
            return <li key={key} style={{ backgroundColor: `${color}` }} onClick={getColor}></li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default ThemeSwitcher;
