import React from "react";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <header>
      <img alt="reactSvg" src="src\assets\react.svg"  className="nav-logo"/>
      <NavigationBar />
    </header>
  );
};

export default Header;
